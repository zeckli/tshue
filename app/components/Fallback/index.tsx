import clsx from 'clsx'
import { motion } from 'framer-motion'

import Wave from '@components/Wave'

const Fallback = () => {
  const baseCss = clsx('mx-auto mt-10 w-1/3')
  return (
    <motion.section
      className={baseCss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Wave show={true} />
    </motion.section>
  )
}

export default Fallback
