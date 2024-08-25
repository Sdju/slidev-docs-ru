# Настройка сочетаний клавиш

> Доступно с версии v0.20

> Начиная с версии v0.35.6 (исключительно), вы решаете, какие базовые сочетания клавиш оставить (см. `...base,` ниже).

<Environment type="client" />

## Начало работы

Создайте `./setup/shortcuts.ts` со следующим содержимым:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // сохранить существующие сочетания клавиш
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

С помощью этой настройки вы можете предоставить пользовательские параметры для сочетаний клавиш, упомянутых в [Навигации](/guide/navigation#navigation-bar). Вышеуказанная конфигурация связывает анимацию или слайд следующего элемента с <kbd>enter</kbd> и предыдущий элемент с <kbd>backspace</kbd>.

Функция конфигурации получает объект с некоторыми методами навигации и возвращает массив, содержащий конфигурацию сочетаний клавиш. Обратитесь к определениям типов для получения дополнительных сведений.

## Продвинутая привязка клавиш

Тип `key` допускает только строки, но вы все равно можете привязать несколько клавиш, используя следующую нотацию:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

## Продвинутые функции навигации

Операции навигации `nav` позволяют вам получить доступ к некоторым функциям, отличным от базовых _следующего слайда_ или _предыдущего слайда_. Смотрите следующие примеры использования:

```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',

      // Установите сочетание клавиш `e` для использования в качестве закладки
      // или быстрого доступа, чтобы перейти конкретно к
      // слайду номер 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Обратитесь к [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) для получения дополнительных сведений о событиях нажатия клавиш.
