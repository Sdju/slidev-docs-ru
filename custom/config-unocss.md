# Настройка UnoCSS

<Environment type="node" />

[UnoCSS](https://unocss.dev) теперь является основным CSS-фреймворком для Slidev с версии v0.42.0. UnoCSS — это быстрый Atomic CSS движок, который обладает полной гибкостью и расширяемостью.

По умолчанию Slidev включает следующие пресеты из коробки:

- [@unocss/preset-uno](https://unocss.dev/presets/uno) - утилиты, совместимые с Tailwind / Windi CSS
- [@unocss/preset-attributify](https://unocss.dev/presets/attributify) - режим Attributify
- [@unocss/preset-icons](https://unocss.dev/presets/icons) - используйте любые иконки с помощью классов
- [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts) - используйте с легкостью веб-шрифты 
- [@unocss/transformer-directives](https://unocss.dev/transformers/directives) - используйте `@apply` в CSS

Slidev также добавляет сокращения, их можно увидеть в его [исходном коде](https://github.com/slidevjs/slidev/blob/main/packages/client/uno.config.ts).

Таким образом, вы можете стилизовать свой контент так, как вам нужно. Например:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Имя

- Элемент 1
- Элемент 2

</div>
```

## Конфигурации

Вы можете создать `uno.config.ts` в корне вашего проекта, чтобы расширить встроенные конфигурации:

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // пользовательский основной фон
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  // ...
})
```

Узнайте больше о [конфигурациях UnoCSS](https://unocss.dev/guide/config-file).
