import clsx from 'clsx'

import Card from './Card'

type CardsPropsType = {
  items: Array<Record<string, Anything>>
}

const Cards = ({ items }: CardsPropsType) => {
  const baseCss = clsx('flex flex-col gap-y-3')

  return (
    <section className={baseCss}>
      {items.map((d) => (
        <Card key={`${d.chainId}-${d.denom}`} data={d} />
      ))}
    </section>
  )
}

export default Cards
