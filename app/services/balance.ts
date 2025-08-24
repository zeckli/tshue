import { StargateClient } from '@cosmjs/stargate'

import { FETCHER_NUMS } from '@constants'
import { encodeAddress } from '@utils'

const fetchBalanceByRpc = async (endpoint: stirng, address: string) => {
  try {
    const client = await StargateClient.connect(endpoint)
    const balances = await client.getAllBalances(address)

    const data = []
    for (const balance of balances) {
      if (!balance || BigInt(balance.amount) <= 0n) {
        continue
      }
      data.push({ amount: balance.amount, denom: balance.denom })
    }

    return data
  } catch {
    return []
  }
}

const fetchBalance = async (decodedData, chain) => {
  const { chainId, name, prefix, rpc } = chain
  const address = encodeAddress(prefix, decodedData)

  if (!rpc || !rpc.address) {
    return
  }

  const data = await fetchBalanceByRpc(rpc.address, address, prefix)
  if (!data || data.length === 0) {
    return
  }

  return data.map((d) => ({
    chainId,
    name,
    address,
    ...d,
  }))
}

export const fetchBalances = async (
  decodedData,
  chains,
  onAppend,
  isDropped
) => {
  if (!chains?.length) {
    return
  }

  const queue = chains.map((_, i) => i).reverse()
  const fetcher = async () => {
    while (!isDropped()) {
      const index = queue.pop()
      if (!index) {
        break
      }

      const chain = chains[index]
      try {
        const items = await fetchBalance(decodedData, chain)
        if (isDropped()) {
          break
        }

        if (items && items.length) {
          onAppend(items)
        }
      } catch {
        // do nothing
      }
    }
  }

  await Promise.all(Array.from({ length: FETCHER_NUMS }, () => fetcher()))
}
