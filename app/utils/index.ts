import { fromBech32, toBech32 } from '@cosmjs/encoding'

export const decodeAddress = (address: string) => {
  return fromBech32(address)?.data
}

export const encodeAddress = (prefix: string, decodedData: Uint8Array) => {
  return toBech32(prefix, decodedData)
}

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))
