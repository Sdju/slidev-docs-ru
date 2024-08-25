# Настройка KaTeX

<Environment type="node" />

Создайте `./setup/katex.ts` со следующим содержимым:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

С помощью этой настройки вы можете предоставить пользовательские параметры для [KaTeX Options](https://katex.org/docs/options.html). Обратитесь к определениям типов и их документации для получения дополнительных сведений.
