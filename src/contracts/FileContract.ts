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
            },
            {
                "name": "oldHash",
                "type": "string"
            }
        ]
    } as const,
    tvc: "te6ccgECLwEABEEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gssBQQuAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPCMGA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KysGAiggghB+v2uJu+MCIIIQfwdtELrjAgkHAiIw+Eby4EzU1NTU0ds84wDyAAgLAiL4TPkAiPkAvY6A3jD4bFv4ACUNBFAgghAvdU9wuuMCIIIQP5Er5LrjAiCCEGi1Xz+64wIgghB+v2uJuuMCJyYiCgIqMPhG8uBM1NTU1NHQ1NTR2zzjAPIADAsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAiT4TPkAiPkAvY6A3jD4bF8D+AAlDQMwiPhM+QBvAMgk+QBwXyDbPNs8+QC68uhmIRAOARiWIW+IwACzjoDoyTEPAQwh2zwzzxEVBEokzzWrAiCOgN9YgDCAIOMEWJUkz4S2Nd4hpTIhjoDfVQJ62zwgHx4bEQQg2zwkjoDeUwO7joCOgOJfBRoWExIDIiOOgORfJts8N8g2UwOhjoDkFCAUAQggjoDkFAEaIds8MyaAMFigzwsHNhUAHG+Nb41ZIG+Ikm+MkTDiAixTQLklwn+x8tBCU0ChUwS7joCOgOIwGBcBRCSWU2PPCwc35F8n2zw4yDdTBKGWU2PPCwc35IB/IaEloDUgASIgllNjzwsHN+RTQKE1JI6A3xkBFF8n2zw4yDeAfzUgACYgb4ggm6WBAP+oAW+Lb4igkTHiAiJvACKOgOFwkyPDAI6A6DBsIR0cARJdqQwyNFzbPDIgAQpw2zxsISABFF8l2zw2yDWAfzIgARRfJts8N8g2MIB/IAA6ASBviJ9vjSBviIEA/6GUb4xvAN+SbwDiWG+Mb4wAMG9sZFNlY3JldCBpcyBub3QgY29ycmVjdAIiMPhCbuMA+Ebyc9H4ANs88gAjKAIW7UTQ10nCAY6A4w0kKgKwcO1E0PQFcSGAQPQOk9cL/5Fw4nIigED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE34j4bPhr+GqAQPQO8r3XC//4YnD4Y4j4bC4lAAIwAU4w0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAv5Er5IMjOzslw+wDe8gAqAyYw+Eby4Ez4Qm7jANHbPDDbPPIAKikoADb4TPhL+Er4Q/hCyMv/yz/Pg8v/WcjOzM3J7VQAJvgA+EvIz4UIzoBvz0DJgQCg+wAAOu1E0NP/0z/TADHT/9TR0PpA1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEuLQAUc29sIDAuNjEuMgAA",
    code: "te6ccgECLAEABBQABCSK7VMg4wMgwP/jAiDA/uMC8gspAgErAoLtRNDXScMB+GYh2zzTAAGegwjXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPCADA0rtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPI8KCgDAiggghB+v2uJu+MCIIIQfwdtELrjAgYEAiIw+Eby4EzU1NTU0ds84wDyAAUIAiL4TPkAiPkAvY6A3jD4bFv4ACIKBFAgghAvdU9wuuMCIIIQP5Er5LrjAiCCEGi1Xz+64wIgghB+v2uJuuMCJCMfBwIqMPhG8uBM1NTU1NHQ1NTR2zzjAPIACQgAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAiT4TPkAiPkAvY6A3jD4bF8D+AAiCgMwiPhM+QBvAMgk+QBwXyDbPNs8+QC68uhmHg0LARiWIW+IwACzjoDoyTEMAQwh2zwzzxESBEokzzWrAiCOgN9YgDCAIOMEWJUkz4S2Nd4hpTIhjoDfVQJ62zwgHBsYDgQg2zwkjoDeUwO7joCOgOJfBRcTEA8DIiOOgORfJts8N8g2UwOhjoDkER0RAQggjoDkEQEaIds8MyaAMFigzwsHNhIAHG+Nb41ZIG+Ikm+MkTDiAixTQLklwn+x8tBCU0ChUwS7joCOgOIwFRQBRCSWU2PPCwc35F8n2zw4yDdTBKGWU2PPCwc35IB/IaEloDUdASIgllNjzwsHN+RTQKE1JI6A3xYBFF8n2zw4yDeAfzUdACYgb4ggm6WBAP+oAW+Lb4igkTHiAiJvACKOgOFwkyPDAI6A6DBsIRoZARJdqQwyNFzbPDIdAQpw2zxsIR0BFF8l2zw2yDWAfzIdARRfJts8N8g2MIB/HQA6ASBviJ9vjSBviIEA/6GUb4xvAN+SbwDiWG+Mb4wAMG9sZFNlY3JldCBpcyBub3QgY29ycmVjdAIiMPhCbuMA+Ebyc9H4ANs88gAgJQIW7UTQ10nCAY6A4w0hJwKwcO1E0PQFcSGAQPQOk9cL/5Fw4nIigED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE34j4bPhr+GqAQPQO8r3XC//4YnD4Y4j4bCsiAAIwAU4w0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAv5Er5IMjOzslw+wDe8gAnAyYw+Eby4Ez4Qm7jANHbPDDbPPIAJyYlADb4TPhL+Er4Q/hCyMv/yz/Pg8v/WcjOzM3J7VQAJvgA+EvIz4UIzoBvz0DJgQCg+wAAOu1E0NP/0z/TADHT/9TR0PpA1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KErKgAUc29sIDAuNjEuMgAA",
    codeHash: "995ef33caa55af331829a6ba61519dcc2c524294f28991c50e2da860e6c20f44",
};
