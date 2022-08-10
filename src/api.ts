import {
  Address,
  ProviderRpcClient,
  ReadonlyAbiParam
} from 'everscale-inpage-provider';

import { firstTransactionBody, fileBody } from '@/graphQl';

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
        type: fileInfo.type == '' ? 'Unknown' : fileInfo.type,
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
    const body = await firstTransactionBody(fileId);
    if (typeof body === 'undefined') return
    const data = await decodeBody(
      body,
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

//todo add correct
async function decodeBody(body: string, structure: readonly ReadonlyAbiParam[]) {
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


//todo add 'end' tag to the last chunk
//todo add base64 type
export const downloadFile = async (fileId: string): Promise<string | undefined> => {
  let created_at = 0
  const messages = []
  for (; ;) {
    const group = await fileBody(fileId, 50, created_at);

    if (typeof group === 'undefined') return
    if (group.length === 0) break
    //stop if stop message found
    if (group[group.length - 1].body == 'te6ccgEBAwEAFgACGQAAAMFD3RyBEFuulcACAQACMAAA') {
      group.pop()
      messages.push(...group)
      break
    }
    created_at = group[group.length - 1].created_at
    messages.push(...group)
  }
  for (let i = 0; i < messages.length; i++) {
    const decoded = (await decodeBody(messages[i].body, [
      { "name": "chunk", "type": "string" },
      { "name": "chunkNumber", "type": "string" }
    ])) as { chunk: string, chunkNumber: string } | undefined

    if (typeof decoded === 'undefined') break

    messages[i].body = decoded.chunk
  }
  let base64 = ''
  for (let i = 0; i < messages.length; i++) {
    base64 += messages[i].body
  }
  return base64
}