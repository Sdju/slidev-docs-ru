# Подсветка синтаксиса

Slidev использует [Shiki](https://github.com/shikijs/shiki) в качестве подсветки кода. Это инструмент для подсветки синтаксиса, основанный на грамматике TextMate, который генерирует цветные токены, поэтому дополнительный CSS не требуется. Поскольку он имеет отличную поддержку грамматики, сгенерированные цвета очень точны, как и то, что вы увидите в VS Code. Shiki также поставляется с [множеством встроенных тем](https://shiki.style/themes). В Slidev также предоставлена поддержка [TwoSlash](#twoslash-integration).

## Настройка Shiki

<Environment type="both" />

Создайте файл `./setup/shiki.ts` со следующим содержимым:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

Если вы хотите добавить пользовательскую тему или язык (грамматика/темы TextMate в JSON), вы можете импортировать их в файл настройки:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Проверьте [встроенные языки](https://shiki.style/languages) и [встроенные темы](https://shiki.style/themes), а также обратитесь к [документации Shiki](https://shiki.style) для получения дополнительных сведений.

:::info
На данный момент Shiki Magic Move не поддерживает трансформеры.
:::

## Настройка Prism

:::warning
Поддержка Prism устарела и будет удалена в будущем. Пожалуйста, рассмотрите возможность использования Shiki вместо этого.
:::

Чтобы настроить ваш Prism, вы можете просто импортировать тему CSS или использовать [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) для настройки тем как для светлого, так и для темного режима. Обратитесь к его документации для получения дополнительных сведений.
