import { assetLists } from 'chain-registry/mainnet'
import { promises as fs } from 'fs'

const LOGOS_FILE = 'app/constants/logo.json'

const data = new Map()

const fetchLogos = () => {
  for (const list of assetLists) {
    for (const asset of list.assets) {
      const name = asset.display
      const symbol = name.toUpperCase()
      const logo = (asset.logoURIs?.svg || asset.logoURIs?.png) ?? ''

      if (!data.has(symbol)) {
        data.set(symbol, { logo })
      }
    }
  }
}

fetchLogos()
await fs.writeFile(
  LOGOS_FILE,
  JSON.stringify(Object.fromEntries(data.entries())),
  'utf8'
)
