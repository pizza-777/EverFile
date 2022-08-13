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
            },
            {
                "name": "oldHash",
                "type": "string"
            }
        ]
    } as const,
    tvc: "te6ccgECLwEABFMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gssBQQuAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPA4GA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KysGAiggghB+v2uJu+MCIIIQfwdtELrjAgkHAiIw+Eby4EzU1NTU0ds84wDyAAgLAiL4TPkAiPkAvY6A3jD4bFv4ACkUBFAgghAI18hKuuMCIIIQP5Er5LrjAiCCEGi1Xz+64wIgghB+v2uJuuMCERANCgIqMPhG8uBM1NTU1NHQ1NTR2zzjAPIADAsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAiT4TPkAiPkAvY6A3jD4bF8D+AApFAIiMPhCbuMA+Ebyc9H4ANs88gAOEgIW7UTQ10nCAY6A4w0PKgKwcO1E0PQFcSGAQPQOk9cL/5Fw4nIigED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE34j4bPhr+GqAQPQO8r3XC//4YnD4Y4j4bC4pAU4w0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAv5Er5IMjOzslw+wDe8gAqAyow+Eby4Ez4Qm7jANTU0ds8MNs88gAqExIANvhM+Ev4SvhD+ELIy//LP8+Dy/9ZyM7MzcntVAJC+Ez5AIj5AL2OgN4w+Gz4APhLyM+FCM6Ab89AyYEAoPsAKRQDMIj4TPkAbwDIJPkAcF8g2zzbPPkAuvLoZigXFQEYliFviMAAs46A6MkxFgEMIds8M88RHARKJM81qwIgjoDfWIAwgCDjBFiVJM+EtjXeIaUyIY6A31UCets8ICYlIhgEINs8JI6A3lMDu46AjoDiXwUhHRoZAyIjjoDkXybbPDfINlMDoY6A5BsnGwEIII6A5BsBGiHbPDMmgDBYoM8LBzYcABxvjW+NWSBviJJvjJEw4gIsU0C5JcJ/sfLQQlNAoVMEu46AjoDiMB8eAUQkllNjzwsHN+RfJ9s8OMg3UwShllNjzwsHN+SAfyGhJaA1JwEiIJZTY88LBzfkU0ChNSSOgN8gARRfJ9s8OMg3gH81JwAmIG+IIJulgQD/qAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCEkIwESXakMMjRc2zwyJwEKcNs8bCEnARRfJds8Nsg1gH8yJwEUXybbPDfINjCAfycAOgEgb4ifb40gb4iBAP+hlG+MbwDfkm8A4lhvjG+MADBvbGRTZWNyZXQgaXMgbm90IGNvcnJlY3QAAjAAOu1E0NP/0z/TADHT/9TR0PpA1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEuLQAUc29sIDAuNjEuMgAA",
    code: "te6ccgECLAEABCYABCSK7VMg4wMgwP/jAiDA/uMC8gspAgErAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAsDA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KCgDAiggghB+v2uJu+MCIIIQfwdtELrjAgYEAiIw+Eby4EzU1NTU0ds84wDyAAUIAiL4TPkAiPkAvY6A3jD4bFv4ACYRBFAgghAI18hKuuMCIIIQP5Er5LrjAiCCEGi1Xz+64wIgghB+v2uJuuMCDg0KBwIqMPhG8uBM1NTU1NHQ1NTR2zzjAPIACQgAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAiT4TPkAiPkAvY6A3jD4bF8D+AAmEQIiMPhCbuMA+Ebyc9H4ANs88gALDwIW7UTQ10nCAY6A4w0MJwKwcO1E0PQFcSGAQPQOk9cL/5Fw4nIigED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE34j4bPhr+GqAQPQO8r3XC//4YnD4Y4j4bCsmAU4w0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAv5Er5IMjOzslw+wDe8gAnAyow+Eby4Ez4Qm7jANTU0ds8MNs88gAnEA8ANvhM+Ev4SvhD+ELIy//LP8+Dy/9ZyM7MzcntVAJC+Ez5AIj5AL2OgN4w+Gz4APhLyM+FCM6Ab89AyYEAoPsAJhEDMIj4TPkAbwDIJPkAcF8g2zzbPPkAuvLoZiUUEgEYliFviMAAs46A6MkxEwEMIds8M88RGQRKJM81qwIgjoDfWIAwgCDjBFiVJM+EtjXeIaUyIY6A31UCets8ICMiHxUEINs8JI6A3lMDu46AjoDiXwUeGhcWAyIjjoDkXybbPDfINlMDoY6A5BgkGAEIII6A5BgBGiHbPDMmgDBYoM8LBzYZABxvjW+NWSBviJJvjJEw4gIsU0C5JcJ/sfLQQlNAoVMEu46AjoDiMBwbAUQkllNjzwsHN+RfJ9s8OMg3UwShllNjzwsHN+SAfyGhJaA1JAEiIJZTY88LBzfkU0ChNSSOgN8dARRfJ9s8OMg3gH81JAAmIG+IIJulgQD/qAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCEhIAESXakMMjRc2zwyJAEKcNs8bCEkARRfJds8Nsg1gH8yJAEUXybbPDfINjCAfyQAOgEgb4ifb40gb4iBAP+hlG+MbwDfkm8A4lhvjG+MADBvbGRTZWNyZXQgaXMgbm90IGNvcnJlY3QAAjAAOu1E0NP/0z/TADHT/9TR0PpA1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KErKgAUc29sIDAuNjEuMgAA",
    codeHash: "a4a2570dc9aa858c6ad4f1b3f12ee8bbd62e45c8250e612c2591e30f06c1b5c3",
};