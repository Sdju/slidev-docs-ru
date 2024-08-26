# Настройка Windi CSS

<Environment type="node" />

::: warning
С версии Slidev v0.47.0 мы больше не поддерживаем Windi CSS. Пожалуйста, мигрируйте на [UnoCSS](/custom/config-unocss).
:::

Markdown естественным образом поддерживает встроенную HTML-разметку. Вы можете стилизовать свой контент так, как вам нужно.

Например:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Имя

- Элемент 1
- Элемент 2

</div>
```

Режим [Attributify](https://windicss.org/posts/v30.html#attributify-mode) в [Windi CSS v3.0](https://windicss.org/posts/v30.html) включен по умолчанию.

## Конфигурация

Чтобы настроить Windi CSS, создайте `setup/windicss.ts` со следующим содержимым для расширения встроенной конфигурации:

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// расширение встроенной конфигурации windicss
export default defineWindiSetup(() => ({
  shortcuts: {
    // пользовательский фон по умолчанию
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // шрифты могут быть заменены здесь, не забудьте обновить ссылки на веб-шрифты в `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Узнайте больше о [конфигурации Windi CSS](https://windicss.org/guide/configuration.html).