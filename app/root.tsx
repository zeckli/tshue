import { json, Outlet } from '@remix-run/react'

import Fallback from '@components/Fallback'
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

export const Layout = ({ children }: BasicComponentPropsType) => (
  <RootLayout>{children}</RootLayout>
)

export const HydrateFallback = () => <Fallback />

const App = () => <Outlet />

export default App
