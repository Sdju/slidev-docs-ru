# Настройка Vite

<Environment type="node" />

Slidev работает на основе [Vite](https://vitejs.dev/) под капотом. Это означает, что вы можете использовать отличную систему плагинов Vite для дальнейшей настройки ваших слайдов.

Файл `vite.config.ts` будет учитываться, если он у вас есть.

Slidev имеет следующие предустановленные плагины:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

Узнайте больше о [предустановках здесь](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Настройка встроенных плагинов

> Доступно с версии v0.21

Чтобы настроить список встроенных плагинов выше, создайте `vite.config.ts` со следующим содержимым. Обратите внимание, что Slidev имеет некоторые предустановленные параметры для этих плагинов, это использование переопределит некоторые из них, что может потенциально привести к сбою приложения. Пожалуйста, относитесь к этому как к **продвинутой функции**, убедитесь, что вы знаете, что делаете, прежде чем продолжить.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* параметры vue */
    },
    markdown: {
      /* параметры markdown-it */
      markdownItSetup(md) {
        /* пользовательские плагины markdown-it */
        md.use(/* ... */)
      },
    },
    /* параметры для других плагинов */
  },
})
```

Смотрите [объявления типов](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) для получения дополнительных параметров.
