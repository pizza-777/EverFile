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
                    },
                    {
                        "name": "newHash",
                        "type": "string"
                    },
                    {
                        "name": "oldSecret",
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
                    },
                    {
                        "name": "newHash",
                        "type": "string"
                    },
                    {
                        "name": "oldSecret",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "returnChange",
                "inputs": [
                    {
                        "name": "newHash",
                        "type": "string"
                    },
                    {
                        "name": "oldSecret",
                        "type": "string"
                    }
                ],
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
        "events": [
            {
                "name": "meta",
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
            }
        ],
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
            },
            {
                "name": "oldHash",
                "type": "string"
            }
        ]
    } as const,
    tvc: "te6ccgECLwEABG0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gssBQQuAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPA4GA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KysGAiggghB+v2uJu+MCIIIQfwdtELrjAgkHAiIw+Eby4EzU1NTU0ds84wDyAAgLAiL4TPkAiPkAvY6A3jD4bFv4ACkUBFAgghAI18hKuuMCIIIQP5Er5LrjAiCCEGi1Xz+64wIgghB+v2uJuuMCERANCgIqMPhG8uBM1NTU1NHQ1NTR2zzjAPIADAsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAlz4TPkAiPkAvY6A3jD4bPgAAo0EcAAAAAAAAAAAAAAAABg6h+xgyM7MzMzJcPsAKRQCIjD4Qm7jAPhG8nPR+ADbPPIADhICFu1E0NdJwgGOgOMNDyoCsHDtRND0BXEhgED0DpPXC/+RcOJyIoBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN+I+Gz4a/hqgED0DvK91wv/+GJw+GOI+GwuKQFOMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAL+RK+SDIzs7JcPsA3vIAKgMqMPhG8uBM+EJu4wDU1NHbPDDbPPIAKhMSADb4TPhL+Er4Q/hCyMv/yz/Pg8v/WcjOzM3J7VQCQvhM+QCI+QC9joDeMPhs+AD4S8jPhQjOgG/PQMmBAKD7ACkUAzCI+Ez5AG8AyCT5AHBfINs82zz5ALry6GYoFxUBGJYhb4jAALOOgOjJMRYBDCHbPDPPERwESiTPNasCII6A31iAMIAg4wRYlSTPhLY13iGlMiGOgN9VAnrbPCAmJSIYBCDbPCSOgN5TA7uOgI6A4l8FIR0aGQMiI46A5F8m2zw3yDZTA6GOgOQbJxsBCCCOgOQbARoh2zwzJoAwWKDPCwc2HAAcb41vjVkgb4iSb4yRMOICLFNAuSXCf7Hy0EJTQKFTBLuOgI6A4jAfHgFEJJZTY88LBzfkXyfbPDjIN1MEoZZTY88LBzfkgH8hoSWgNScBIiCWU2PPCwc35FNAoTUkjoDfIAEUXyfbPDjIN4B/NScAJCBviCCapYQHqAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCEkIwESXakMMjRc2zwyJwEKcNs8bCEnARRfJds8Nsg1gH8yJwEUXybbPDfINjCAfycAOAEgb4ieb40gb4iEB6GUb4xvAN+SbwDiWG+Mb4wAMG9sZFNlY3JldCBpcyBub3QgY29ycmVjdAACMAA67UTQ0//TP9MAMdP/1NHQ+kDU0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oS4tABRzb2wgMC42MC4wAAA=",
    code: "te6ccgECLAEABEAABCSK7VMg4wMgwP/jAiDA/uMC8gspAgErAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAsDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KCgDAiggghB+v2uJu+MCIIIQfwdtELrjAgYEAiIw+Eby4EzU1NTU0ds84wDyAAUIAiL4TPkAiPkAvY6A3jD4bFv4ACYRBFAgghAI18hKuuMCIIIQP5Er5LrjAiCCEGi1Xz+64wIgghB+v2uJuuMCDg0KBwIqMPhG8uBM1NTU1NHQ1NTR2zzjAPIACQgAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAlz4TPkAiPkAvY6A3jD4bPgAAo0EcAAAAAAAAAAAAAAAABg6h+xgyM7MzMzJcPsAJhECIjD4Qm7jAPhG8nPR+ADbPPIACw8CFu1E0NdJwgGOgOMNDCcCsHDtRND0BXEhgED0DpPXC/+RcOJyIoBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN+I+Gz4a/hqgED0DvK91wv/+GJw+GOI+GwrJgFOMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAL+RK+SDIzs7JcPsA3vIAJwMqMPhG8uBM+EJu4wDU1NHbPDDbPPIAJxAPADb4TPhL+Er4Q/hCyMv/yz/Pg8v/WcjOzM3J7VQCQvhM+QCI+QC9joDeMPhs+AD4S8jPhQjOgG/PQMmBAKD7ACYRAzCI+Ez5AG8AyCT5AHBfINs82zz5ALry6GYlFBIBGJYhb4jAALOOgOjJMRMBDCHbPDPPERkESiTPNasCII6A31iAMIAg4wRYlSTPhLY13iGlMiGOgN9VAnrbPCAjIh8VBCDbPCSOgN5TA7uOgI6A4l8FHhoXFgMiI46A5F8m2zw3yDZTA6GOgOQYJBgBCCCOgOQYARoh2zwzJoAwWKDPCwc2GQAcb41vjVkgb4iSb4yRMOICLFNAuSXCf7Hy0EJTQKFTBLuOgI6A4jAcGwFEJJZTY88LBzfkXyfbPDjIN1MEoZZTY88LBzfkgH8hoSWgNSQBIiCWU2PPCwc35FNAoTUkjoDfHQEUXyfbPDjIN4B/NSQAJCBviCCapYQHqAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCEhIAESXakMMjRc2zwyJAEKcNs8bCEkARRfJds8Nsg1gH8yJAEUXybbPDfINjCAfyQAOAEgb4ieb40gb4iEB6GUb4xvAN+SbwDiWG+Mb4wAMG9sZFNlY3JldCBpcyBub3QgY29ycmVjdAACMAA67UTQ0//TP9MAMdP/1NHQ+kDU0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSsqABRzb2wgMC42MC4wAAA=",
    codeHash: "5d6471e155a412530d91e3a9ddc176b507d281f854fa13f48fb7a7fa5c2f18ed",
};