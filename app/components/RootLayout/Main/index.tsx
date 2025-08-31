import clsx from 'clsx'

const Main = ({ children }: BasicComponentPropsType) => {
  const baseCss = clsx('crate')

  return <main className={baseCss}>{children}</main>
}

export default Main
