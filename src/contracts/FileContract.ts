export const FileContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "time",
            "expire"
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
            },
            {
                "name": "chunks",
                "inputs": [],
                "outputs": [
                    {
                        "name": "chunks",
                        "type": "map(uint32,bool)"
                    }
                ]
            },
            {
                "name": "chunksCounter",
                "inputs": [],
                "outputs": [
                    {
                        "name": "chunksCounter",
                        "type": "uint32"
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
                "name": "chunks",
                "type": "map(uint32,bool)"
            },
            {
                "name": "chunksCounter",
                "type": "uint32"
            },
            {
                "name": "isMeta",
                "type": "bool"
            }
        ]
    } as const,
    tvc: "te6ccgECLgEABE4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsrBQQtAoDtRNDXScMB+GYh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nriUzDTP9MfbEHTHwHbPPI8DQYDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwqKgYCKCCCEH6/a4m74wIgghB/B20QuuMCCQcCIjD4RvLgTNTU1NTR2zzjAPIACBECIvhM+QCI+QC9joDeMPhsW/gAKBMEUCCCEAjXyEq64wIgghA/kSvkuuMCIIIQaLVfP7rjAiCCEH6/a4m64wIQDwwKAiow+Eby4EzU1NTU0dDU1NHbPOMA8gALEQJc+Ez5AIj5AL2OgN4w+Gz4AAKNBHAAAAAAAAAAAAAAAAAYOofsYMjOzMzMyXD7ACgTAiIw+EJu4wD4RvJz0fgA2zzyAA0RAhbtRNDXScIBjoDjDQ4pArBw7UTQ9AVxIYBA9A6T1wv/kXDiciKAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfiPhs+Gv4aoBA9A7yvdcL//hicPhjiPhsLSgBTjDR2zz4SyGOG40EcAAAAAAAAAAAAAAAAC/kSvkgyM7OyXD7AN7yACkDKjD4RvLgTPhCbuMA1NTR2zww2zzyACkSEQAu+Ez4S/hK+ELIy//Pg8v/WcjOzM3J7VQCQvhM+QCI+QC9joDeMPhs+AD4S8jPhQjOgG/PQMmBAKD7ACgTAzCI+Ez5AG8AyCT5AHBfINs82zz5ALry6GYnFhQBGJYhb4jAALOOgOjJMRUBDCHbPDPPERsESiTPNasCII6A31iAMIAg4wRYlSTPhLY13iGlMiGOgN9VAnrbPCAlJCEXBCDbPCSOgN5TA7uOgI6A4l8FIBwZGAMiI46A5F8m2zw3yDZTA6GOgOQaJhoBCCCOgOQaARoh2zwzJoAwWKDPCwc2GwAcb41vjVkgb4iSb4yRMOICLFNAuSXCf7Hy0EJTQKFTBLuOgI6A4jAeHQFEJJZTY88LBzfkXyfbPDjIN1MEoZZTY88LBzfkgH8hoSWgNSYBIiCWU2PPCwc35FNAoTUkjoDfHwEUXyfbPDjIN4B/NSYAJCBviCCapYQHqAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCEjIgESXakMMjRc2zwyJgEKcNs8bCEmARRfJds8Nsg1gH8yJgEUXybbPDfINjCAfyYAOAEgb4ieb40gb4iEB6GUb4xvAN+SbwDiWG+Mb4wAMG9sZFNlY3JldCBpcyBub3QgY29ycmVjdAACMAAy7UTQ0//TADHT/9TR0PpA1NH4bPhr+Gr4YgAK+Eby4EwCCvSkIPShLSwAFHNvbCAwLjYwLjAAAA==",
    code: "te6ccgECKwEABCEABCSK7VMg4wMgwP/jAiDA/uMC8gsoAgEqAoDtRNDXScMB+GYh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nriUzDTP9MfbEHTHwHbPPI8CgMDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwnJwMCKCCCEH6/a4m74wIgghB/B20QuuMCBgQCIjD4RvLgTNTU1NTR2zzjAPIABQ4CIvhM+QCI+QC9joDeMPhsW/gAJRAEUCCCEAjXyEq64wIgghA/kSvkuuMCIIIQaLVfP7rjAiCCEH6/a4m64wINDAkHAiow+Eby4EzU1NTU0dDU1NHbPOMA8gAIDgJc+Ez5AIj5AL2OgN4w+Gz4AAKNBHAAAAAAAAAAAAAAAAAYOofsYMjOzMzMyXD7ACUQAiIw+EJu4wD4RvJz0fgA2zzyAAoOAhbtRNDXScIBjoDjDQsmArBw7UTQ9AVxIYBA9A6T1wv/kXDiciKAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATfiPhs+Gv4aoBA9A7yvdcL//hicPhjiPhsKiUBTjDR2zz4SyGOG40EcAAAAAAAAAAAAAAAAC/kSvkgyM7OyXD7AN7yACYDKjD4RvLgTPhCbuMA1NTR2zww2zzyACYPDgAu+Ez4S/hK+ELIy//Pg8v/WcjOzM3J7VQCQvhM+QCI+QC9joDeMPhs+AD4S8jPhQjOgG/PQMmBAKD7ACUQAzCI+Ez5AG8AyCT5AHBfINs82zz5ALry6GYkExEBGJYhb4jAALOOgOjJMRIBDCHbPDPPERgESiTPNasCII6A31iAMIAg4wRYlSTPhLY13iGlMiGOgN9VAnrbPCAiIR4UBCDbPCSOgN5TA7uOgI6A4l8FHRkWFQMiI46A5F8m2zw3yDZTA6GOgOQXIxcBCCCOgOQXARoh2zwzJoAwWKDPCwc2GAAcb41vjVkgb4iSb4yRMOICLFNAuSXCf7Hy0EJTQKFTBLuOgI6A4jAbGgFEJJZTY88LBzfkXyfbPDjIN1MEoZZTY88LBzfkgH8hoSWgNSMBIiCWU2PPCwc35FNAoTUkjoDfHAEUXyfbPDjIN4B/NSMAJCBviCCapYQHqAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCEgHwESXakMMjRc2zwyIwEKcNs8bCEjARRfJds8Nsg1gH8yIwEUXybbPDfINjCAfyMAOAEgb4ieb40gb4iEB6GUb4xvAN+SbwDiWG+Mb4wAMG9sZFNlY3JldCBpcyBub3QgY29ycmVjdAACMAAy7UTQ0//TADHT/9TR0PpA1NH4bPhr+Gr4YgAK+Eby4EwCCvSkIPShKikAFHNvbCAwLjYwLjAAAA==",
    codeHash: "4b3d64f2ceada98646ce79b51a26dcadbeb8f7713060a816b3e193a7278ef790",
};