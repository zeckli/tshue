import clsx from 'clsx'

import ArrowSvg from '@components/Svg/Arrow'

type SummaryPropsType = {
  num: number
  order: OrderType
  changeOrder: () => void
}

const Summary = ({ num = 0, order, changeOrder }: SummaryPropsType) => {
  const { value } = order

  const isAsc = value === 'asc'

  const baseCss = clsx(
    'f-row-cb px-1 pb-3 pt-1 [&>div]:text-sm [&>div]:text-grey-50'
  )
  const numCss = clsx('pr-1.5 font-bold text-orange-70')
  const orderCss = clsx('f-row-cc cursor-pointer gap-x-1')
  const svgCss = clsx('stroke-grey-30', { 'scale-y-[-1]': !isAsc })

  return (
    <section className={baseCss}>
      <div>
        <span className={numCss}>{num}</span>
        assets found
      </div>
      <div className={orderCss} onClick={changeOrder}>
        Chain
        <ArrowSvg className={svgCss} width={15} height={15} />
      </div>
    </section>
  )
}

export default Summary
