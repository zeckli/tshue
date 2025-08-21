import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettierLint from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindLint from 'eslint-plugin-tailwindcss'

export default ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  prettierLint,
  tailwindLint.configs['flat/recommended'],
  {
    ignores: [
      'build',
      'node_modules',
      'public',
      'vendor',
      'server.js',
      'tailwind.config.js',
    ],
  },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
  },
  {
    rules: {
      'no-irregular-whitespace': 'off',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'off',
    },
  }
)
