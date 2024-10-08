import { createConfig } from "@ponder/core";
import { http } from "viem";
import { erc721ABI } from "./abis/erc721ABI";

export default createConfig({
  database: process.env.IS_DEV
    ? undefined
    : {
        kind: "postgres",
        schema: process.env.SCHEMA,
        publishSchema: process.env.PUBLIC_SCHEMA,
      },
  options: {
    maxHealthcheckDuration: 10,
  },
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_421614),
    },
  },
  contracts: {
    ERC721: {
      network: "arbitrum",
      abi: erc721ABI,
      address: "0x6325439389E0797Ab35752B4F43a14C004f22A9c",
      startBlock: 3163146,
      endBlock: 3200000,
    },
  },
});
