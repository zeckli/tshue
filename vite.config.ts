import { vitePlugin as remix } from '@remix-run/dev'
import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const repo = '/tshue/'

export default defineConfig({
  base: repo,
  plugins: [
    remix({
      basename: repo,
      ssr: false,
      buildEnd({ viteConfig }) {
        if (!viteConfig.isProduction) {
          return
        }

        const buildPath = viteConfig.build.outDir
        copyFileSync(join(buildPath, 'index.html'), join(buildPath, '404.html'))
      },
    }),
    tsconfigPaths(),
  ],
})
