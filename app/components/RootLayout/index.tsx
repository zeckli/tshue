import Doc from './Doc'
import Foot from './Foot'
import Head from './Head'
import Main from './Main'

const RootLayout = ({ children }: BasicComponentType) => {
  return (
    <Doc>
      <Head />
      <Main>{children}</Main>
      <Foot />
    </Doc>
  )
}

export default RootLayout
