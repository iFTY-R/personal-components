// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  /* options */
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
