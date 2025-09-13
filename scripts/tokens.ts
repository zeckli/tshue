import { assetLists } from 'chain-registry/mainnet'
import { promises as fs } from 'fs'
import path from 'path'

const CHAINLIST_PATH = 'vendor/chainlist/chain'
const TOKENS_FILE = 'public/data/token.json'

const data = new Map()

const fetchToken = () => {
  for (const list of assetLists) {
    for (const asset of list.assets) {
      const name = asset.display
      const unit = asset.denomUnits?.find((d) => d.denom === name)
      const decimals = unit?.exponent ?? 6
      const symbol = name.toUpperCase()
      data.set(asset.base, { decimals, symbol })
    }
  }
}

const fetchIBCToken = async () => {
  const dirs = (await fs.readdir(CHAINLIST_PATH, { withFileTypes: true }))
    .filter((d) => d.isDirectory())
    .map((d) => path.join(CHAINLIST_PATH, d.name))

  for (const dir of dirs) {
    try {
      const filePath = path.join(dir, 'assets_2.json')
      const items = JSON.parse(await fs.readFile(filePath, 'utf8'))

      for (const item of items) {
        const { denom } = item
        if (!denom || !denom.startsWith('ibc/') || data.get(denom)) {
          continue
        }
        data.set(denom, {
          decimals: Number(item.decimals),
          symbol: (item.symbol || '').toUpperCase(),
        })
      }
    } catch {
      // do nothing
    }
  }
}

fetchToken()
await fetchIBCToken()
await fs.writeFile(
  TOKENS_FILE,
  JSON.stringify(Object.fromEntries(data.entries())),
  'utf8'
)
