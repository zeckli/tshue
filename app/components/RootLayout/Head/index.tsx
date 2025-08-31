import clsx from 'clsx'
import { memo } from 'react'

import Logo from '@assets/logo.svg'

const Head = () => {
  const baseCss = clsx('crate text-center')
  const boxCss = clsx('f-row-cc gap-x-1 pt-16 md:pt-24')
  const logoCss = clsx('size-14 self-end')
  const nameCss = clsx('text-5xl font-bold md:text-6xl')
  const descCss = clsx('pb-4 pt-6 text-center text-lg text-grey-30 md:text-xl')
  const breakCss = clsx('block md:hidden')

  return (
    <header className={baseCss}>
      <div className={boxCss}>
        <img className={logoCss} src={Logo} />
        <h1 className={nameCss}>tshue</h1>
      </div>
      <p className={descCss}>
        Rediscover forgotten assets in the&nbsp;
        <br className={breakCss} />
        Cosmos ecosystem
      </p>
    </header>
  )
}

export default memo(Head)
