import clsx from 'clsx'
import { motion } from 'framer-motion'
import capitalize from 'lodash-es/capitalize'
import truncate from 'lodash-es/truncate'
import { memo } from 'react'

import { formatToken } from '@services/token'

type CardPropsType = {
  data: Record<string, Anything>
}

const Card = ({ data }: CardPropsType) => {
  const { name } = data
  const { num, symbol, logo } = formatToken(data.denom, data.amount)

  const isIBC = (data?.denom ?? '').startsWith('ibc/')

  const baseCss = clsx(
    'card-motion grid grid-cols-2 gap-x-2 rounded-xl bg-white px-4 py-3 md:px-6'
  )
  const infoCss = clsx('f-row-cs gap-x-3')
  const imageCss = clsx('size-10 rounded-full bg-orange-30')
  const chainCss = clsx('text-xs text-grey-30')
  const numCss = clsx('f-row-ce text-sm font-medium md:text-base')
  const ibcCss = clsx('ml-1 px-[5px] py-px text-xs text-orange-50')

  return (
    <motion.div
      className={baseCss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={infoCss}>
        {logo ? (
          <img src={logo} width={40} height={40} />
        ) : (
          <div className={imageCss} />
        )}
        <div>
          <p>{truncate(symbol, { length: 12, omission: '...' })}</p>
          <p className={chainCss}>
            {capitalize(name)}
            {isIBC ? <span className={ibcCss}>IBC</span> : ''}
          </p>
        </div>
      </div>
      <div className={numCss}>{num}</div>
    </motion.div>
  )
}

export default memo(Card)
