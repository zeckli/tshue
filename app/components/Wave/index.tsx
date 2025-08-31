import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const bar = { width: 3, height: 10, gap: 6 }

const variants = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
}

type WavePropsType = {
  className?: string
  show: boolean
}

const Wave = ({ className, show }: WavePropsType) => {
  const waveRef = useRef<HTMLDivElement>(null)
  const [waveWidth, setWaveWidth] = useState(0)

  useEffect(() => {
    const element = waveRef.current
    if (!element) {
      return
    }

    let frame = 0
    const measure = () => {
      const width = element?.getBoundingClientRect().width
      setWaveWidth(width)
    }

    frame = requestAnimationFrame(measure)

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    })
    observer.observe(element)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  const per = bar.width + bar.gap
  const count = Math.max(1, Math.floor((waveWidth + bar.gap) / per))

  const baseCss = clsx('py-4', className)
  const waveCss = clsx('f-row-cc w-full gap-x-1.5')
  const waveBarCss = clsx('rounded bg-orange-50', { 'animate-wave': show })

  return (
    <motion.section
      className={baseCss}
      variants={variants}
      initial={show ? 'show' : 'hide'}
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div ref={waveRef} className={waveCss}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={waveBarCss}
            style={{
              width: bar.width,
              height: bar.height,
              animationDelay: `${i * 0.09}s`,
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Wave
