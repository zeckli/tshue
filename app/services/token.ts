import Decimal from 'decimal.js'

import { LOGOS, TOKENS } from '@constants'

Decimal.set({ toExpNeg: -1000, toExpPos: 1000 })

const formatIntPart = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const formatFraction = (intPart: string, fracPart: string) => {
  const pos = fracPart.search(/[^0]/)
  if (pos === -1) return intPart

  const cut = pos < 7 ? 7 : pos + 1
  const f = fracPart.slice(0, cut)
  return f ? `${intPart}.${f}` : intPart
}

export const formatToken = (denom: string, amount: string) => {
  const { decimals, symbol } = TOKENS.get(denom) ?? {
    decimals: 6,
    symbol: denom,
  }

  const { logo } = LOGOS.get(symbol) ?? { logo: '' }

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
