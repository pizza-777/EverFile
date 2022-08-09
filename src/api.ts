import {
  Address,
  ProviderRpcClient,
  ReadonlyAbiParam
} from 'everscale-inpage-provider';

import { EverscaleStandaloneClient } from 'everscale-standalone-client';

import { FileContract } from '@/contracts/FileContract';

let _ever: ProviderRpcClient;
let _accountInteraction: everWallet | undefined;

const _everStandalone = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: 'local',
    }),
  forceUseFallback: true,
});

async function ever(): Promise<ProviderRpcClient> | never {
  if (typeof _ever === 'undefined') {
    _ever = new ProviderRpcClient();
    if (!(await _ever.hasProvider())) {
      alert('Please install the EverWallet extension');
      throw new Error('Extension is not installed');
    }
  }

  return _ever
}

async function everWallet(): Promise<everWallet | never> {
  const _ever = await ever();
  if (typeof _accountInteraction === 'undefined') {
    const { accountInteraction } = await _ever.requestPermissions({
      permissions: ['basic', 'accountInteraction'],
    });
    if (accountInteraction == null) {
      alert('Issue with permissions');
      throw new Error('Insufficient permissions');
    }
    _accountInteraction = accountInteraction
  }

  return _accountInteraction;
}

export async function uploadFile(fileInfo: File): Promise<string | undefined> {
  const everProvider = await ever();
  const accountInteraction = await everWallet();
  const fileAddress: string = genRandomAddress()
  const fileContractObject = new everProvider.Contract(
    FileContract.abi,
    new Address(fileAddress)
  );
  try {
    await fileContractObject.methods.upload(
      {
        name: fileInfo.name,
        size: String(fileInfo.size),
        type: fileInfo.type,
      }).send({
        from: accountInteraction.address,
        amount: '1',
        bounce: true
      })
    return fileAddress;
  } catch (e: unknown) {
    console.error(e);
  }
}

function genRandomAddress(): string {
  let address = '0:';
  const chars = '0123456789abcdef';
  for (let i = 0; i < 64; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
}

export async function getFileInfo(fileId: string): Promise<FileInfo | undefined> {

  try {
    const transactions = (await _everStandalone.getTransactions({
      address: new Address(fileId),
    })).transactions

    if (transactions.length == 0) return undefined;
    //first transaction is about file 
    const data = await decodeBody(
      transactions[transactions.length - 1].inMessage.body?.toString() ?? '',
      [
        { "name": "name", "type": "string" },
        { "name": "size", "type": "string" },
        { "name": "type", "type": "string" },
      ]);

    if (typeof data == 'undefined') return;
    return data

  } catch (e: unknown) {
    console.error(e);
    // alert('Wrong message ID')
  }
}

async function decodeBody(body: string, structure: readonly ReadonlyAbiParam[]): Promise<FileInfo | undefined> {
  const everProvider = _everStandalone;
  try {
    const message = await everProvider.unpackFromCell({
      structure: structure,
      boc: body,
      allowPartial: true
    });

    return message.data;
  } catch (e) {
    console.error(e);
  }
}
export const createChunks = (base64: string, cSize: number) => {
  let startPointer = 0;
  const endPointer = base64.length;
  const chunks = [];
  while (startPointer < endPointer) {
    const newStartPointer = startPointer + cSize;
    chunks.push(base64.slice(startPointer, newStartPointer));
    startPointer = newStartPointer;
  }
  return chunks;
}

export const uploadChunk = async (fileId: string, chunk: string, chunkNumber: number) => {
  const everProvider = await ever();
  const fileContractObject = new everProvider.Contract(
    FileContract.abi,
    new Address(fileId)
  );
  try {
    await fileContractObject.methods.uploadChunk(
      {
        chunk: chunk,
        chunkNumber: String(chunkNumber),
      }).sendExternal({
        publicKey: '0x0',
        withoutSignature: true,
      })
  } catch (e: unknown) {
    console.error(e);
  }
}