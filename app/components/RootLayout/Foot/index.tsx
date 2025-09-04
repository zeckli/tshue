import clsx from 'clsx'
import { memo } from 'react'

const Foot = () => {
  const baseCss = clsx(
    'crate py-12 text-center text-sm font-normal text-grey-50'
  )
  const linkCss = clsx('underline underline-offset-2')

  return (
    <section className={baseCss}>
      Created by{' '}
      <a className={linkCss} href="https://zeckli.dev/" target="_blank">
        Zeck Li
      </a>
    </section>
  )
}

export default memo(Foot)
