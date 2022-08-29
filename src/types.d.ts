declare type FileInfo = { name: string, type: string, size: string }
declare type everWallet = { address: Address; publicKey: string; contractType: WalletContractType; }
declare type BlockchainMessages = {
    edges: { node: { body: string } }[], pageInfo: { hasNextPage: boolean, endCursor: string }
} 