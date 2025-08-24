import { chains } from 'chain-registry/mainnet'

const chainCache = { chains: [] }

const transformChain = (source) => {
  const {
    apis,
    bech32Prefix: prefix,
    chainId,
    chainName: name,
    chainType,
  } = source

  if (chainType !== 'cosmos') {
    return null
  }

  const rpc = (apis?.rpc || [])[0]
  const rest = (apis?.rest || [])[0]
  return { chainId, name, prefix, rpc, rest }
}

export const fetchChains = async () => {
  if (chainCache && chainCache.chains.length > 0) {
    return chainCache.chains
  }

  chainCache.chains = chains.map(transformChain).filter(Boolean)
  return chainCache.chains
}
