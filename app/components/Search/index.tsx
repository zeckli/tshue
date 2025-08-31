import clsx from 'clsx'

import AbortButton from './Abort'
import SearchInput from './Input'
import SubmitButton from './Submit'

type SearchPropsType = {
  address: string
  setAddress: (value: string) => void
  phase: SearchPhaseType
  submit: () => Promise<void>
  abort: () => void
}

const Search = ({
  address,
  setAddress,
  phase,
  submit,
  abort,
}: SearchPropsType) => {
  const baseCss = clsx('relative h-14 w-full')
  const controlCss = clsx(
    'abs-span-right f-row-cc z-10 rounded-xl bg-white px-2'
  )
  const buttonCss = clsx(
    'inline-grid grid-cols-1 grid-rows-1 place-items-center overflow-hidden'
  )

  return (
    <section className={baseCss}>
      <SearchInput address={address} setAddress={setAddress} phase={phase} />

      <div className={controlCss}>
        <div className={buttonCss}>
          <SubmitButton phase={phase} submit={submit} />
          <AbortButton phase={phase} abort={abort} />
        </div>
      </div>
    </section>
  )
}

export default Search
