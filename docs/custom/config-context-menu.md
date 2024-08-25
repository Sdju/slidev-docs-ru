# Настройка контекстного меню

<Environment type="client" />

Настройте элементы контекстного меню в Slidev.

Создайте `./setup/context-menu.ts` со следующим содержимым:

```ts
import { defineContextMenuSetup } from '@slidev/types'
import { computed } from 'vue'
import Icon3DCursor from '~icons/carbon/3d-cursor'

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // Используется как `title`, если `small` равно `true`
      label: 'Пункт меню', // или компонент Vue
      action() {
        alert('Пункт меню нажат!')
      },
      disabled: isPresenter.value,
    },
  ])
})
```

Это добавит новый пункт меню в контекстное меню.

Чтобы отключить контекстное меню глобально, установите `contextMenu` в `false` в frontmatter. `contextMenu` также может быть установлен в `dev` или `build`, чтобы включить контекстное меню только в режиме разработки или сборки.