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

function query(fileAddr: string): string {
  return `{
        messages(
          filter: {
            dst: {
              eq: "${fileAddr}"
            }
          }
          orderBy: { path: "created_lt", direction: DESC }
          limit: 1
        ) {
          body
        }
      }`
}

export const firstTransactionBody = async (fileAddr: string): Promise<string | undefined> => {
  try {
    return (await client.net.query({ "query": query(fileAddr) })).result.data.messages[0].body;
  } catch (e) {
    console.log(e);
  }
}
