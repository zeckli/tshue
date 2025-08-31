import { memo } from 'react'

const ArrowSvg = ({ className, width = 24, height = 24 }: SvgPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M21.5 5a1.5 1.5 0 0 0-3 0h3Zm-2.56 31.06a1.5 1.5 0 0 0 2.12 0l9.547-9.545a1.5 1.5 0 1 0-2.122-2.122L20 32.88l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122l9.546 9.546ZM20 5h-1.5v30h3V5H20Z"
    />
  </svg>
)

export default memo(ArrowSvg)
