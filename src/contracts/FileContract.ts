export const FileContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "upload",
                "inputs": [
                    {
                        "name": "file_name",
                        "type": "string"
                    },
                    {
                        "name": "file_size",
                        "type": "string"
                    },
                    {
                        "name": "file_type",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "uploadChunk",
                "inputs": [
                    {
                        "name": "chunk",
                        "type": "string"
                    },
                    {
                        "name": "chunkNumber",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "returnChange",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sender",
                "inputs": [],
                "outputs": [
                    {
                        "name": "sender",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "salt",
                "type": "uint256"
            },
            {
                "key": 2,
                "name": "sender",
                "type": "address"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "salt",
                "type": "uint256"
            },
            {
                "name": "sender",
                "type": "address"
            }
        ]
    } as const
};