# Настройка Mermaid

<Environment type="client" />

Создайте `./setup/mermaid.ts` со следующим содержимым:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

С помощью этой настройки вы можете предоставить пользовательские параметры по умолчанию для [Mermaid](https://mermaid-js.github.io/). Обратитесь к определениям типов и их документации для получения дополнительных сведений.

## Пользовательская тема/стили

Если вы хотите создать свои пользовательские темы или стили для Mermaid, вы можете сделать это, определив `themeVariables`, как в следующем примере:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Общие переменные темы
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Переменные диаграммы последовательностей
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
    }
  }
})
```

Вы можете найти все переменные темы на странице [Конфигурация тем Mermaid](https://mermaid.js.org/config/theming.html).
