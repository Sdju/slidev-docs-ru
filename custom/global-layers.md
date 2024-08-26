# Глобальные слои

Глобальные слои позволяют вам иметь пользовательские компоненты, которые **сохраняются** на всех слайдах. Это может быть полезно для добавления нижних колонтитулов, анимаций между слайдами, глобальных эффектов и т.д.

Slidev предоставляет три слоя для этого использования: создайте `global-top.vue`, `global-bottom.vue` или `custom-nav-controls.vue` в корне вашего проекта, и они будут автоматически подхвачены.

Также есть слои для **каждого** слайда: `layouts/slide-top.vue` и `layouts/slide-bottom.vue`. Использование аналогично глобальным слоям, но они применяются к каждому слайду, поэтому может быть несколько экземпляров.

::: tip
При экспорте следует использовать опцию `--per-slide`, чтобы гарантировать, что глобальные слои правильно применяются к каждому слайду.
:::

## Отношение слоев

По оси z, сверху вниз:

- NavControls
  - Настраиваемые элементы управления навигацией (`custom-nav-controls.vue`)
- Глобальный верх (`global-top.vue`) - единственный экземпляр
- Верх слайда (`slide-top.vue`) - экземпляр на каждый слайд
- Содержимое слайда
- Нижний колонтитул слайда (`slide-bottom.vue`) - экземпляр на каждый слайд
- Глобальный низ (`global-bottom.vue`) - единственный экземпляр

## Пример

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Ваше имя</footer>
</template>
```

Текст `Ваше имя` будет отображаться на всех ваших слайдах.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Следующий" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

Кнопка `Следующий` появится в элементах управления навигацией.

Чтобы включать её по условию, вы можете применить её с помощью [Vue Global Context](/custom/vue-context).

```html
<!-- скрыть нижний колонтитул на странице 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Ваше имя
  </footer>
</template>
```

```html
<!-- скрыть нижний колонтитул для макета "cover" -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Ваше имя
  </footer>
</template>
```

```html
<!-- пример нижнего колонтитула для страниц -->
<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- скрыть кнопку в режиме докладчика -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Следующий" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
