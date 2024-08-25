# Настройка Monaco

<Environment type="client" />

Создайте `./setup/monaco.ts` со следующим содержимым:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // используйте `monaco` для настройки
})
```

Узнайте больше о [настройке Monaco](https://github.com/Microsoft/monaco-editor).

## Использование

Чтобы использовать Monaco в ваших слайдах, просто добавьте `{monaco}` к вашим фрагментам кода:

````md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // ошибка
```
````

## Типы TypeScript

Когда вы используете TypeScript с Monaco, типы для зависимостей будут автоматически установлены на стороне клиента.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

В приведенном выше примере убедитесь, что `vue` и `@vueuse/core` установлены локально как зависимости / devDependencies, Slidev позаботится о том, чтобы типы работали для редактора автоматически. При развертывании как SPA эти типы также будут упакованы для статического хостинга.

### Дополнительные типы

Slidev просканирует все блоки кода monaco в ваших слайдах и импортирует типы для используемых библиотек за вас. Если он пропустит некоторые, вы можете явно указать дополнительные пакеты для импорта типов:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Автоматическое получение типов

Вы можете по желанию переключиться на загрузку типов из CDN, установив следующий frontmatter:

```md
---
monacoTypesSource: ata
---
```

Эта функция работает на основе [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) и полностью выполняется на стороне клиента.

## Настройка тем

С версии v0.48.0 Monaco будет повторно использовать тему Shiki, которую вы настроили в [файле настройки Shiki](/custom/highlighters#configure-shiki), с помощью [`@shikijs/monaco`](https://shiki.style/packages/monaco). Вам больше не нужно беспокоиться об этом, и она будет иметь согласованный стиль с остальными вашими блоками кода.

## Настройка редактора

> Доступно с версии v0.43.0

Если вы хотите настроить редактор Monaco, вы можете передать объект `editorOptions`, который соответствует определению [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html).

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Или, если вы хотите, чтобы эти параметры применялись ко всем экземплярам Monaco, вы можете вернуть их в функции `defineMonacoSetup`:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

## Отключение

С версии v0.48.0 редактор Monaco включен по умолчанию и будет упакован только при его использовании. Если вы хотите отключить его, вы можете установить `monaco` в `false` в frontmatter вашего слайда:

```yaml
---
monaco: false # также может быть `dev` или `build` для включения по условию
---
```
