# Настройка маршрутов

<Environment type="client" />

Добавьте свои страницы в приложение Slidev.

## Использование

Создайте `./setup/routes.ts` со следующим содержимым:

```ts
import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup((routes) => {
  return [
    ...routes,
    {
      path: '/my-page',
      component: () => import('../pages/my-page.vue'),
    },
  ]
})
```

Узнайте больше о маршрутах в [документации Vue Router](https://router.vuejs.org/).