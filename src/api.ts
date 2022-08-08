import {  
  Address,
  ProviderRpcClient,  
} from 'everscale-inpage-provider';

import { EverscaleStandaloneClient } from 'everscale-standalone-client';

import { FileContract} from '@/contracts/FileContract';
  

const _everStandalone1 = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: 'local',
    }),
      forceUseFallback: true,
});

const fc = new _everStandalone1.Contract(FileContract.abi, new Address('0:8d985990ae4efbe7dffea40717dddf97f692d85e82425c3c9d37c67a4aee301c'));

  export async function fupload(){
      try{
      const response = await fc.methods.load({
        s: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World',
      }).sendExternal({
        publicKey: '0x0',
        withoutSignature: true,
      });    
     return response;
      }catch(e){
          console.log(e)
      }  
  }

  export async function fdownload(){
    try {
      const transactions = (await _everStandalone1.getTransactions({
        address: fc.address,
      })).transactions
      console.log(transactions)

      const data = transactions.map((t) => {
        return {
          sender: t.inMessage.src?.toString() ?? '',
          message: t.inMessage.body?.toString() ?? '',
          timestamp: t.createdAt,
          id: t.id.hash
        }
      }).filter((t) => {
        if (t.message == '') return false;
        return true;
      });

      let decodedMessage: { message: string } | undefined
  for (let i = 0; i < data.length; i++) {
    decodedMessage = await decodeBody(data[i].message);

    if (typeof decodedMessage == 'undefined') {
      data.splice(i, 1);
      continue;
    }

    data[i].message = decodedMessage.message;

  }
 console.log(data)
  }catch(e){
      console.log(e)
  }
  
}


async function decodeBody(body: string): Promise<{ message: string } | undefined> {

  try {
    const message = await _everStandalone1.unpackFromCell({
      structure: [
        { "name": "message", "type": "string" }
      ],
      boc: body,
      allowPartial: true
    });

    return message.data;

  } catch (e) {
    console.error(e);
  }
}