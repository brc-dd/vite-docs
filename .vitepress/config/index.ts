import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { esConfig } from './es'
import { jaConfig } from './ja'
import { sharedConfig } from './shared'

export default defineConfig({
  ...sharedConfig,
  locales: {
    en: { label: 'English', lang: 'en', ...enConfig },
    zh: { label: '简体中文', link: 'https://cn.vitejs.dev' },
    ja: { label: '日本語', lang: 'ja', ...jaConfig },
    es: { label: 'Español', lang: 'es', ...esConfig }
  }
})
