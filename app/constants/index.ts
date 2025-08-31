import logos from './logo.json'
import tokens from './token.json'

export const FETCHER_NUMS = 8

export const LOGOS = new Map(Object.entries(logos))

export const TOKENS = new Map(Object.entries(tokens))

const DECO_URL =
  'https://raw.githubusercontent.com/cosmos/chain-registry/master'

export const DECO = {
  akash: `${DECO_URL}/akash/images/akt.svg`,
  atom: `${DECO_URL}/cosmoshub/images/atom.svg`,
  atone: `${DECO_URL}/atomone/images/atomone.svg`,
  band: `${DECO_URL}/bandchain/images/band.svg`,
  celestia: `${DECO_URL}/celestia/images/celestia.svg`,
  evmos: `${DECO_URL}/evmos/images/evmos.svg`,
  osmosis: `${DECO_URL}/osmosis/images/osmo.svg`,
  stride: `${DECO_URL}/stride/images/strd.svg`,
}
