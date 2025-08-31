export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          10: '#fff8ef',
          20: '#fff1e0',
        },
        grey: {
          30: '#766d62',
          40: '#5a534b',
          50: '#4c463f',
          70: '#3e3933',
          90: '#302c28',
        },
        orange: {
          30: '#fbb59e',
          50: '#fba386',
          70: '#e1714c',
        },
      },
      maxWidth: {
        base: '640px',
      },
      minWidth: {
        base: '343px',
      },
    },
  },
  plugins: [],
}
