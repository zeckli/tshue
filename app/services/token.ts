import Decimal from 'decimal.js'

import { fetchJson } from '@utils'

Decimal.set({ toExpNeg: -1000, toExpPos: 1000 })

const logoCache: { logos: Map<string, Anything> } = { logos: new Map() }

const tokenCache: { tokens: Map<string, Anything> } = { tokens: new Map() }

export const fetchLogos = async () => {
  if (logoCache && logoCache.logos && Object.keys(logoCache.logos).length > 0) {
    return logoCache.logos
  }

  const data = await fetchJson('/data/logo.json')
  logoCache.logos = new Map(Object.entries(data))
  return logoCache.logos
}

export const fetchTokens = async () => {
  if (
    tokenCache &&
    tokenCache.tokens &&
    Object.keys(tokenCache.tokens).length > 0
  ) {
    return tokenCache.tokens
  }

  const data = await fetchJson('/data/token.json')
  tokenCache.tokens = new Map(Object.entries(data))
  return tokenCache.tokens
}

const formatIntPart = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const formatFraction = (intPart: string, fracPart: string) => {
  const pos = fracPart.search(/[^0]/)
  if (pos === -1) return intPart

  const cut = pos < 7 ? 7 : pos + 1
  const f = fracPart.slice(0, cut)
  return f ? `${intPart}.${f}` : intPart
}

export const formatToken = (denom: string, amount: string) => {
  const { decimals, symbol } = tokenCache.tokens.get(denom) ?? {
    decimals: 6,
    symbol: denom,
  }

  const { logo } = logoCache.logos.get(symbol) ?? { logo: '' }

  const num = new Decimal(amount).div(new Decimal(10).pow(decimals))
  let numString = num.toString()

  if (numString.includes('.')) {
    const [intPart, fracPart] = numString.split('.')
    numString = formatFraction(intPart, fracPart)
  }

  const [intPart, fracPart] = numString.split('.')
  const formattedNum = fracPart
    ? `${formatIntPart(intPart)}.${fracPart}`
    : `${formatIntPart(intPart)}`
  return { num: formattedNum, symbol, logo }
}
