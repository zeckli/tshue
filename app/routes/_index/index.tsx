import { useRouteLoaderData } from '@remix-run/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import orderBy from 'lodash-es/orderBy'
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'

import Wave from '@components/Wave'
import Search from '@components/Search'
import Summary from '@components/Summary'
import { fetchBalances } from '@services/balance'
import { decodeAddress } from '@utils'

import Empty from './Empty'

const Cards = lazy(() => import('@components/Cards'))

type RootDataType = {
  chains: Array<ChainType>
}

const Page = () => {
  const { chains } = useRouteLoaderData<RootDataType>('root') ?? { chains: [] }
  const [phase, setPhase] = useState<SearchPhaseType>('ready')
  const [items, setItems] = useState<Array<Record<string, Anything>>>([])
  const [address, setAddress] = useState('')
  const [order, setOrder] = useState<OrderType>({ field: 'name', value: 'asc' })

  const runId = useRef(0)
  const acted = useRef(0)
  const isSearch = phase === 'search'
  const isActed = acted.current > 0

  useEffect(() => {
    return () => {
      runId.current += 1
    }
  }, [])

  const sortedItems = useMemo(
    () => orderBy(items, [order.field], [order.value]),
    [items, order.field, order.value]
  )

  const submit = async () => {
    // reset after re-submit
    const currId = ++runId.current
    setItems([])
    setPhase('search')

    // check address
    if (!address) {
      if (currId === runId.current) {
        setPhase('ready')
      }
      return
    }

    // process address
    let decodedData = null
    try {
      decodedData = decodeAddress(address)
    } catch {
      if (currId === runId.current) {
        setPhase('ready')
      }
      return
    }

    ++acted.current
    // fetch balances
    try {
      await fetchBalances(
        decodedData,
        chains,
        (d: Array<Record<string, Anything>>) =>
          setItems((prev) => {
            if (currId !== runId.current) {
              return prev
            }

            const map = new Map(
              prev.map((k: Record<string, Anything>) => [
                `${k.chainId}-${k.denom}`,
                k,
              ])
            )
            for (const item of d) {
              const { chainId, denom } = item
              const key = `${chainId}-${denom}`
              const exist = map.get(key)

              if (!exist) {
                map.set(key, item)
              }
            }
            return Array.from(map.values())
          }),
        () => currId !== runId.current
      )
    } catch {
      // show error message
    } finally {
      if (currId === runId.current) {
        setPhase('ready')
      }
    }
  }

  const abort = () => {
    runId.current++
    setPhase('ready')
  }

  const changeOrder = () => {
    setOrder({
      ...order,
      value: order.value === 'desc' ? 'asc' : 'desc',
    })
  }

  const waveCss = clsx('py-6')

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <Search
        address={address}
        setAddress={setAddress}
        phase={phase}
        submit={submit}
        abort={abort}
      />

      <Wave className={waveCss} show={isSearch} />
      {isActed && (
        <Summary
          num={sortedItems.length}
          order={order}
          changeOrder={changeOrder}
        />
      )}
      {!isActed && <Empty />}
      {sortedItems.length > 0 && (
        <Suspense fallback={null}>
          <Cards items={sortedItems} />
        </Suspense>
      )}
    </motion.section>
  )
}

export default Page
