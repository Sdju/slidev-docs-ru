# Настройка и расширение парсера

Slidev разбивает ваш файл презентации (например, `slides.md`) на три этапа:

1. Выполняется этап "предварительной обработки": файл разбивается на слайды с использованием разделителя `---`, учитывая возможные блоки frontmatter.
2. Каждый слайд обрабатывается с помощью внешней библиотеки.
3. Slidev разрешает специальное свойство frontmatter `src: ....`, которое позволяет включать другие md файлы.

## Markdown парсер

Настройка markdown парсера, используемого на этапе 2, может быть выполнена путем [настройки внутренних плагинов Vite](/custom/config-vite#configure-internal-plugins).

## Расширения предварительного парсера

> Доступно с версии v0.37.0.

:::warning
Важно: при изменении конфигурации предварительного парсера вам необходимо остановить и снова запустить slidev (перезапуск может быть недостаточным).
:::

Предварительный парсер (этап 1 выше) является высоко расширяемым и позволяет реализовать пользовательские синтаксисы для ваших md файлов. Расширение предварительного парсера считается **продвинутой функцией** и может нарушить [интеграции редакторов](/guide/editors) из-за неявных изменений в синтаксисе.

Чтобы настроить его, создайте файл `./setup/preparser.ts` со следующим содержимым:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

Этот пример систематически заменяет любую строку `@@@` на строку с `hello`. Он иллюстрирует структуру файла конфигурации предварительного парсера и некоторые из основных концепций, с которыми связан предварительный парсер:

- `definePreparserSetup` must be called with a function as parameter.
- The function receives the file path (of the root presentation file), the headmatter (from the md file) and, since v0.48.0, a mode (dev, build or export). It could use this information (e.g., enable extensions based on the presentation file or whether we are exporting a PDF).
- The function must return a list of preparser extensions.
- An extension can contain:
  - a `transformRawLines(lines)` function that runs just after parsing the headmatter of the md file and receives a list of all lines (from the md file). The function can mutate the list arbitrarily.
  - a `transformSlide(content, frontmatter)` function that is called for each slide, just after splitting the file, and receives the slide content as a string and the frontmatter of the slide as an object. The function can mutate the frontmatter and must return the content string (possibly modified, possibly `undefined` if no modifications have been done).
  - a `name`

## Примеры расширений предварительного парсера

### Случай использования 1: компактный синтаксис верхнего уровня презентации

Представьте ситуацию, когда (часть) вашей презентации в основном показывает обложки изображений и включает другие md файлы. Вы можете захотеть компактной нотации, где, например, (часть) `slides.md` выглядит следующим образом:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Добро пожаловать
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Вопросы?
увидимся в следующий раз
```

Чтобы разрешить эти синтаксисы `@src:` и `@cover:`, создайте файл `./setup/preparser.ts` со следующим содержимым:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

И это всё.

### Случай использования 2: использование пользовательского frontmatter для обертывания слайдов

Представьте случай, когда вы часто хотите масштабировать некоторые из ваших слайдов, но все же хотите использовать разнообразные существующие макеты, поэтому создание нового макета не будет подходящим.
Например, вы можете захотеть написать ваш `slides.md` следующим образом:

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Добро пожаловать

> отлично!

---
_scale: 4
---

# Перерыв

---

# Ок

---
layout: center
_scale: 2.5
---

# Вопросы?
увидимся в следующий раз
```

Здесь мы использовали подчеркивание в `_scale`, чтобы избежать возможных конфликтов с существующими свойствами frontmatter (действительно, случай `scale`, без подчеркивания, вызвал бы потенциальные проблемы).

Чтобы обработать этот синтаксис `_scale: ...` в frontmatter, создайте файл `./setup/preparser.ts` со следующим содержимым:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

И это всё.
