import clsx from 'clsx'
import { memo } from 'react'

const Foot = () => {
  const baseCss = clsx(
    'crate py-12 text-center text-sm font-normal text-grey-50'
  )

  return <section className={baseCss}>Created by Zeck Li</section>
}

export default memo(Foot)
