import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

const { configs: jsConfigs } = js
const reactRecommended = reactPlugin.configs.recommended
const typescriptRecommended = typescriptPlugin.configs.recommended

export default [
  jsConfigs.recommended,
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.json'],
    ignores: ['node_modules/', 'dist/', 'build/'],
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: typescriptParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRecommended.rules,
      ...typescriptRecommended.rules,
    },
  },
]
