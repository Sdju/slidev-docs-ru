# Структура каталога

Slidev использует некоторые соглашения о структуре каталогов, чтобы минимизировать поверхность конфигурации и сделать расширения функциональности гибкими и интуитивно понятными.

Основная структура выглядит следующим образом:

```bash
your-slidev/
  ├── components/       # пользовательские компоненты
  ├── layouts/          # пользовательские макеты
  ├── public/           # статические ресурсы
  ├── setup/            # пользовательская настройка / хуки
  ├── styles/           # пользовательские стили
  ├── index.html        # инъекции в index.html
  ├── slides.md         # основной вход для слайдов
  └── vite.config.ts    # расширение конфигурации vite
```

Все они являются необязательными.

## Компоненты

Соглашения: `./components/*.{vue,js,ts,jsx,tsx,md}`

Компоненты внутри этого каталога могут быть использованы непосредственно в Markdown слайдов с тем же именем компонента, что и имя файла.

Например:

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Мой слайд

<MyComponent :count="4"/>

<!-- оба названия работают -->

<hello-world foo="bar">
  Слот
</hello-world>
```

Эта функция поддерживается благодаря [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), узнайте больше там.

Slidev также предоставляет некоторые [встроенные компоненты](/builtin/components) для использования.

## Макеты

Соглашения: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Вы можете использовать любое имя файла для вашего макета. Затем вы ссылаетесь на свой макет в заголовке YAML, используя имя файла.

```yaml
---
layout: my-cool-theme
---
```

Если макет, который вы предоставляете, имеет то же имя, что и встроенный макет или макет темы, ваш пользовательский макет будет иметь приоритет над встроенным/тематическим макетом. Порядок приоритета: `локальный > тема > встроенный`.

В компоненте макета используйте `<slot/>` для контента слайда. Например:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Public

Соглашения: `./public/*`

Ресурсы в этом каталоге будут обслуживаться по корневому пути `/` во время разработки и скопированы в корень каталога dist без изменений. Узнайте больше о [каталоге `public` Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Style

Соглашения: `./style.css` | `./styles/index.{css,js,ts}`

Файлы, соответствующие этому соглашению, будут заинъектированы в корень приложения. Если вам нужно импортировать несколько css-файлов, вы можете создать следующую структуру и управлять порядком импорта самостоятельно.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

Стили будут обрабатываться [UnoCSS](https://unocss.dev/) и [PostCSS](https://postcss.org/), так что вы можете использовать вложение css и [at-директивы](https://unocss.dev/transformers/directives#apply) из коробки. Например:

<!-- eslint-skip -->

```less
.slidev-layout {
  --uno: px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    --uno: select-none;
  }

  pre, code {
    --uno: select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Узнайте больше о синтаксисе](https://unocss.dev/transformers/directives#apply).

## `index.html`

Соглашения: `index.html`

Файл `index.html` предоставляет возможность инъекции мета-тегов и/или скриптов в основной `index.html`.

Например, для следующего пользовательского `index.html`:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

Финальный размещенный `index.html` будет:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Глобальные слои

Соглашения: `global-top.vue` | `global-bottom.vue`

Узнайте больше: [Глобальные слои](/custom/global-layers)
