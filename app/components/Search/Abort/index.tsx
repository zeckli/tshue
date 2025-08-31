import clsx from 'clsx'
import { motion } from 'framer-motion'

import CrossSvg from '@components/Svg/Cross'

type AbortButtonPropsType = {
  phase: SearchPhaseType
  abort: () => void
}

const variants = {
  show: { opacity: 1, x: '0%' },
  hide: { opacity: 0, x: '100%' },
}

const AbortButton = ({ phase, abort }: AbortButtonPropsType) => {
  const isReady = phase === 'ready'

  const baseCss = clsx('col-start-1 row-start-1 transition')
  const svgCss = clsx('trans-500 fill-grey-50 hover:fill-grey-30')

  return (
    <motion.button
      type="button"
      className={baseCss}
      onClick={abort}
      variants={variants}
      initial={isReady ? 'hide' : 'show'}
      animate={isReady ? 'hide' : 'show'}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <CrossSvg className={svgCss} />
    </motion.button>
  )
}

export default AbortButton
