# Глобальный контекст Vue

Slidev внедряет `$slidev` в [глобальный контекст Vue](https://v3.vuejs.org/api/application-config.html#globalproperties) для сложных условий или элементов управления навигацией.

## Использование

Вы можете получить доступ к нему в любом месте вашего markdown и шаблона Vue, используя ["Синтаксис фигурных скобок"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Страница 1

Текущая страница: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Заголовок: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Следующая страница</button>
</template>
```

## Свойства

### `$clicks`

`$clicks` хранит количество кликов на текущем слайде. Может использоваться условно для отображения различного контента при кликах.

```html
<div v-if="$clicks > 3">Контент</div>
```

### `$page`

`$page` хранит номер текущей страницы, начиная с 1.

```md
Страница: {{ $page }}
```

### `$renderContext`

`$renderContext` хранит текущий контекст рендеринга, может быть `slide`, `overview`, `presenter` или `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  Это содержимое будет отображаться только в представлении слайдов
</div>
```

### `$slidev.nav`

Реактивный объект, хранящий свойства и элементы управления навигацией слайдов. Например:

```js
$slidev.nav.next() // перейти на следующий шаг

$slidev.nav.nextSlide() // перейти на следующий слайд (пропустить v-клики)

$slidev.nav.go(10) // перейти на слайд #10
```

```js
$slidev.nav.currentPage // текущий номер слайда

$slidev.nav.currentLayout // текущий идентификатор макета
```

Для получения информации о других доступных свойствах см. [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

> Примечание: `$slidev.nav.clicks` - это глобальное состояние, а `$clicks` - локальное для каждого слайда. Рекомендуется **использовать `$clicks` вместо `$slidev.nav.clicks`**, чтобы избежать срабатывания кликов при переходе между страницами.

### `$slidev.configs`

Реактивный объект, хранящий конфигурации, определенные в первой frontmatter вашего `slides.md`. Например

```yaml
---
title: Мой первый Slidev!
---
```

```
{{ $slidev.configs.title }} // 'Мой первый Slidev!'
```

### `$slidev.themeConfigs`

Реактивный объект, хранящий конфигурации темы.

```yaml
---
title: Мой первый Slidev!
themeConfig:
  primary: # 213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Доступно с версии v0.43.0

Сокращение для `$slidev.nav`.

## Использование композаблов

> Доступно с версии v0.48.0

### Контекст

Если вы хотите получить контекст программно (и безопасно для типов), вы можете импортировать композиции из `@slidev/client`:

```vue
<script setup>
import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
onSlideEnter(() => { /* ... */ })
onSlideLeave(() => { /* ... */ })
// ...
</script>
```

> [!Примечание]
> Ранее вы могли видеть использование импорта вложенных модулей, таких как `import { isDark } from '@slidev/client/logic/dark.ts'`, это **НЕ РЕКОМЕНДУЕТСЯ**, так как они являются внутренними деталями реализации и могут быть нарушены в будущем. Старайтесь всегда использовать публичный API из `@slidev/client`, если это возможно.

### Типы

Если вы хотите получить тип программно, вы можете импортировать типы, такие как `TocItem`, из `@slidev/types`:

```vue
<script setup>
import type { TocItem } from '@slidev/types'

function tocFunc(tree: TocItem[]): TocItem[] {
  // ...
}
</script>
```