// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Anything = any

type BasicComponentPropsType = {
  className?: string
  children: React.ReactNode
}

type SvgPropsType = {
  className?: string
  width?: number
  height?: number
}

type SearchPhaseType = 'ready' | 'search'

type ChainType = {
  chainId: string
  name: string
  prefix: string
  rpc: Record<string, Anything>
  rest: string
}

type OrderType = {
  field: string
  value: 'asc' | 'desc'
}
