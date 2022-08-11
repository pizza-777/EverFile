import { TonClient } from "@tonclient/core";
import { libWeb, libWebSetup } from "@tonclient/lib-web";


libWebSetup({
  binaryURL: "./tonclient.wasm",
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
TonClient.useBinaryLibrary(libWeb);
const client = new TonClient({
  network: {
    server_address: "127.0.0.1",
  }
});

export const firstTransactionBody = async (fileAddr: string): Promise<string | undefined> => {
  try {
    return (await client.net.query({
      "query": `{
      messages(
        filter: {
          dst: {
            eq: "${fileAddr}"
          }
          created_lt:{
            eq: null
          }
        }
        orderBy: { path: "created_lt", direction: DESC }
        limit: 1
      ) {
        body
      }
    }` })).result.data.messages[0].body;
  } catch (e) {
    console.log(e);
  }
}



export const fileBody = async (fileAddr: string, limit: number, created_at: number): Promise<{body: string, created_at: number}[] | undefined> => {
  try {
    return (await client.net.query({
      "query": `{
      messages(
        filter: {
          dst: {
            eq: "${fileAddr}"
          }
        created_lt:{
          eq: null
        }
        created_at:{
          gt:${created_at}
        }
        }
        orderBy: { path: "created_at", direction: ASC }
        limit: ${limit}
      ) {
        body
        created_at
      }
    }` })).result.data.messages;
  } catch (e) {
    console.log(e);
  }
}