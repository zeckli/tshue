import clsx from 'clsx'
import { memo } from 'react'

const Head = () => {
  const baseCss = clsx('crate')
  const nameCss = clsx(
    'pt-16 text-center text-5xl font-bold md:pt-24 md:text-6xl'
  )
  const descCss = clsx('pb-4 pt-6 text-center text-lg md:text-xl')

  return (
    <header className={baseCss}>
      <h1 className={nameCss}>tshue</h1>
      <p className={descCss}>
        Rediscover forgotten assets in the Cosmos ecosystem
      </p>
    </header>
  )
}

export default memo(Head)
