import clsx from 'clsx'

import { DECO } from '@constants'

const Page = () => {
  const baseCss = clsx('f-row-cc relative text-center')
  const descCss = clsx('mx-auto w-1/2 py-28 text-grey-40 md:py-32')
  const emojiCss = clsx('text-6xl grayscale')
  const imgCss = clsx('animate-float absolute opacity-60 grayscale')

  const xsCss = 'w-[18px] h-[18px]'
  const smCss = 'w-[25px] h-[25px]'
  const mdCss = 'size-[36px] md:size-[40px]'

  // left
  const bandCss = clsx(imgCss, xsCss, 'left-3 top-[calc(50%-80px)] md:left-4')
  const atomCss = clsx(imgCss, mdCss, 'left-8 top-[calc(50%-25px)] md:left-16')
  const strideCss = clsx(
    imgCss,
    smCss,
    'left-20 top-[calc(50%-100px)] md:left-32'
  )
  const evmosCss = clsx(
    imgCss,
    smCss,
    'left-20 top-[calc(50%+50px)] md:left-32'
  )

  // right
  const atoneCss = clsx(
    imgCss,
    xsCss,
    'right-3 top-[calc(50%+30px)] md:right-4'
  )
  const osmosisCss = clsx(
    imgCss,
    mdCss,
    'right-8 top-[calc(50%-25px)] md:right-16'
  )
  const akashCss = clsx(
    imgCss,
    smCss,
    'right-20 top-[calc(50%-100px)] md:right-32'
  )
  const celestiaCss = clsx(
    imgCss,
    smCss,
    'right-20 top-[calc(50%+50px)] md:right-32'
  )

  return (
    <section className={baseCss}>
      <p className={descCss}>
        Oh! Page Not Found.
        <br />
        <br />
        <span className={emojiCss}>🫠</span>
      </p>

      {/* left */}
      <img
        className={atomCss}
        src={DECO.atom}
        style={{ animationDelay: `${1 * 0.2}s` }}
      />
      <img
        className={bandCss}
        src={DECO.band}
        style={{ animationDelay: `${7 * 0.2}s` }}
      />
      <img
        className={strideCss}
        src={DECO.stride}
        style={{ animationDelay: `${3 * 0.2}s` }}
      />
      <img
        className={evmosCss}
        src={DECO.evmos}
        style={{ animationDelay: `${5 * 0.2}s` }}
      />

      {/* right */}
      <img
        className={osmosisCss}
        src={DECO.osmosis}
        style={{ animationDelay: `${2 * 0.2}s` }}
      />
      <img
        className={atoneCss}
        src={DECO.atone}
        style={{ animationDelay: `${6 * 0.2}s` }}
      />
      <img
        className={akashCss}
        src={DECO.akash}
        style={{ animationDelay: `${4 * 0.2}s` }}
      />
      <img
        className={celestiaCss}
        src={DECO.celestia}
        style={{ animationDelay: `${8 * 0.2}s` }}
      />
    </section>
  )
}

export default Page
