# Настройка Vue

<Environment type="client" />

Slidev использует [Vue 3](https://v3.vuejs.org/) для рендеринга приложения на стороне клиента. Вы можете расширить приложение, добавив пользовательские плагины или конфигурации.

Создайте `./setup/main.ts` со следующим содержимым:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Это также может быть использовано в качестве основной точки входа вашего приложения Slidev для выполнения некоторых инициализаций перед запуском приложения.

Узнайте больше: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).