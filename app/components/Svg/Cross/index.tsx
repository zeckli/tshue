import { memo } from 'react'

const CrossSvg = ({ className, width = 24, height = 24 }: SvgPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="inherit"
      d="M7.06 9.182a1.5 1.5 0 1 1 2.122-2.121l23.334 23.334a1.5 1.5 0 1 1-2.12 2.122L7.06 9.181Z"
    />
    <path
      fill="inherit"
      d="M30.395 7.06a1.5 1.5 0 1 1 2.122 2.122L9.181 32.516a1.5 1.5 0 1 1-2.121-2.12L30.395 7.06Z"
    />
  </svg>
)

export default memo(CrossSvg)
