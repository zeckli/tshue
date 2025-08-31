import clsx from 'clsx'
import { motion } from 'framer-motion'

import SearchSvg from '@components/Svg/Search'

type SubmitButtonPropsType = {
  phase: string
  submit: () => void
}

const variants = {
  show: { opacity: 1, x: '0%' },
  hide: { opacity: 0, x: '-100%' },
}

const SubmitButton = ({ phase, submit }: SubmitButtonPropsType) => {
  const isReady = phase === 'ready'

  const baseCss = clsx('col-start-1 row-start-1 transition')
  const svgCss = clsx('trans-500 stroke-grey-50 hover:stroke-grey-30')

  return (
    <motion.button
      type="submit"
      className={baseCss}
      onClick={submit}
      variants={variants}
      initial={isReady ? 'show' : 'hide'}
      animate={isReady ? 'show' : 'hide'}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <SearchSvg className={svgCss} />
    </motion.button>
  )
}

export default SubmitButton
