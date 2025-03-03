import { defineChain } from 'viem'

export const electroneumNetwork = defineChain({
    id: 146,
    name: 'Electroneum',
    nativeCurrency: {
      decimals: 18,
      name: 'ETN',
      symbol: 'ETN',
    },
    rpcUrls: {
      default: {
        http: [process.env.ELECTRONEUM_HTTP_ENDPOINT],
        //webSocket: ['wss://sonic-rpc.publicnode.com'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://blockexplorer.electroneum.com/' },
    },
  })