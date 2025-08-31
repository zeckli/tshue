import { memo } from 'react'

const SearchSvg = ({ className, width = 24, height = 24 }: SvgPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      stroke="inherit"
      strokeLinecap="round"
      strokeWidth={3.5}
      d="m26.368 26.368 7.92 7.92M26.085 9.115c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0Z"
    />
  </svg>
)

export default memo(SearchSvg)
