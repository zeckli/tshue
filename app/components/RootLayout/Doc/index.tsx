import { Links, Scripts } from '@remix-run/react'

import Logo from '@assets/logo.svg'

const Doc = ({ children }: BasicComponentPropsType) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export default Doc
