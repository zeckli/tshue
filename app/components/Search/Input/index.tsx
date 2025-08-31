import clsx from 'clsx'

type SearchInputPropsType = {
  address: string
  setAddress: (value: string) => void
  phase: string
}

const SearchInput = ({ address, setAddress, phase }: SearchInputPropsType) => {
  const isSearch = phase === 'search'

  const baseCss = clsx(
    'abs-fill z-0 rounded-xl pl-4 pr-10 outline-none',
    'disabled:cursor-not-allowed disabled:bg-white disabled:opacity-100'
  )

  return (
    <input
      className={baseCss}
      value={address}
      placeholder="Drop your wallet address"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setAddress(event.target.value)
      }
      disabled={isSearch}
    />
  )
}

export default SearchInput
