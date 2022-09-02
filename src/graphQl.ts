import { TonClient } from "@tonclient/core";
import { libWeb, libWebSetup } from "@tonclient/lib-web";
import { config } from './config';

libWebSetup({
  binaryURL: "./tonclient.wasm",
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
TonClient.useBinaryLibrary(libWeb);
const client = new TonClient({
  network: {
    server_address: config.network.everx,
  }
});

export const firstTransactionBody = async (fileAddr: string): Promise<string | undefined> => {
  try {
    return (await client.net.query({
      "query": `{
      messages(
        filter: {
          src: {
            eq: "${fileAddr}"
          }
        	bounce:{
            eq: null
          }  
        }
        orderBy: { path: "created_at", direction: ASC }
        limit: 1
      ) {
        body
      }
    }` })).result.data.messages[0].body
  } catch (e) {
    console.log(e);
  }
}

export const fileBody = async (fileAddr: string, after: string): Promise<BlockchainMessages | undefined> => {
  try {
    const r = (await client.net.query({
      "query": `query {
        blockchain {
          account(
            address: "${fileAddr}"
          ) {
            messages(
              msg_type: ExtIn
              ${after !== "" ? 'after: "' + after + '"' : ""}
              ) {
              pageInfo {
                startCursor
                endCursor
                hasNextPage
              }
              edges {
                node {
                  body
                }
              }
            }
          }
        }
      }
      ` })).result.data.blockchain.account.messages;
    return r;
  } catch (e) {
    console.log(e);
  }
}


export const uploadedFiles = async (before: string): Promise<BlockchainMessages | undefined> => {
  try {
    const r = (await client.net.query({
      "query": `{
        blockchain {
          account(
            address: "${config.fileDeployer}"
          ) {
            messages(msg_type: IntOut
              last: 50
              ${before !== "" ? 'before: "' + before + '"' : ""}
            ) {
              pageInfo {
                startCursor
                endCursor
                hasNextPage
              }
              edges {
                node {        
                  dst
                  created_at_string
                }
                
              }
            }
          }
        }
      }
      
      ` })).result.data.blockchain.account.messages;
    return r;
  } catch (e) {
    console.log(e);
  }
}