import { json, Outlet } from '@remix-run/react'

import RootLayout from '@components/RootLayout'
import { fetchChains } from '@services/chain'

import rootCss from './root.css?url'

export const links = () => {
  return [{ rel: 'stylesheet', href: rootCss }]
}

export const clientLoader = async () => {
  const chains = await fetchChains()
  return json({ chains })
}

export const Layout = ({ children }: GeneralComponentType) => (
  <RootLayout>{children}</RootLayout>
)

export const HydrateFallback = () => <p>Fall back ...</p>

const App = () => <Outlet />

export default App
