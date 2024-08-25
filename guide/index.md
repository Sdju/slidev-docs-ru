---
outline: deep
---

# Начало работы

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup> - это веб-инструмент для создания и презентации слайдов. Он разработан для разработчиков, чтобы они могли сосредоточиться на написании содержимого в Markdown, при этом имея возможность использовать HTML и Vue-компоненты для создания идеальных макетов и дизайнов с встроенными интерактивными демонстрациями в своих презентациях.

Он использует богатый по функционалу Markdown-файл для генерации красивых слайдов с мгновенным обновлением, а также многими встроенными интеграциями, такими как Live Coding, экспорт в PDF, запись презентации и так далее. Поскольку он работает на веб-технологиях, вы можете делать со Slidev что угодно - возможности безграничны.

Вы можете узнать больше о причинах создания проекта в разделе [Почему Slidev](/guide/why).

## Возможности

- 📝 [**На основе Markdown**](/guide/syntax.html) - используйте свои любимые редакторы и рабочий процесс
- 🧑‍💻 [**Дружественный для разработчиков**](/guide/syntax.html#code-blocks) - встроенная подсветка синтаксиса, Live Coding и т.д.
- 🎨 [**Темизация**](/themes/gallery.html) - темы можно распространять и использовать через npm-пакеты
- 🌈 [**Стильный**](/guide/syntax.html#embedded-styles) - утилиты по требованию через [UnoCSS](https://github.com/unocss/unocss)
- 🤹 [**Интерактивный**](/custom/directory-structure.html#components) - бесшовное встраивание Vue-компонентов
- 🎙 [**Режим докладчика**](/guide/presenter-mode.html) - используйте другое окно или даже свой телефон для управления слайдами
- 🎨 [**Рисование**](/guide/drawing.html) - рисуйте и делайте аннотации на своих слайдах
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - встроенная поддержка математических уравнений с LaTeX
- 📰 [**Диаграммы**](/guide/syntax.html#diagrams) - создавайте диаграммы с текстовыми описаниями
- 🌟 [**Иконки**](/guide/syntax.html#icons) - прямой доступ к иконкам из любого набора
- 💻 [**Редакторы**](/guide/editors.html) - встроенный редактор или [расширение для VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Запись**](/guide/recording.html) - встроенная запись и отображение с камеры
- 📤 [**Портативность**](/guide/exporting.html) - экспорт в PDF, PNG или даже в размещаемое SPA
- ⚡️ [**Быстрый**](https://vitejs.dev) - мгновенная перезагрузка на основе [Vite](https://vitejs.dev)
- 🛠 [**Настраиваемый**](/custom/config-vite.html) - использование плагинов Vite, компонентов Vue или любых npm-пакетов

## Создание вашей первой презентации

### Попробуйте онлайн

Начните работу со Slidev прямо в вашем браузере: [sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

### Создание локально

::: code-group

```bash [npm]
npm init slidev@latest
```

```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Следуйте подсказкам и начинайте создавать свои слайды прямо сейчас! Для получения более подробной информации о синтаксисе Markdown, прочитайте [руководство по синтаксису](/guide/syntax).

## Командная строка

В проекте, инициализированном с помощью `create-slidev`, вы увидите следующий скрипт в вашем `package.json`:

```json
{
  "scripts": {
    "dev": "slidev", // запуск сервера разработки
    "build": "slidev build", // сборка для продакшена SPA
    "export": "slidev export" // экспорт слайдов в pdf
  }
}
```

В противном случае вы можете использовать его с [`npx`](https://github.com/npm/cli/blob/latest/bin/npx)

```bash
$ npx slidev
```

Запустите `slidev --help` для получения дополнительных доступных опций.

## Синтаксис Markdown

Slidev читает ваш файл `slides.md` в корне проекта и преобразует его в слайды. Всякий раз, когда вы вносите изменения в него, содержимое слайдов будет обновляться мгновенно. Например:

````md
# Slidev

Привет, мир

---

# Страница 2

Используйте блоки кода напрямую для подсветки

```ts
console.log('Привет, мир!')
```

---

# Страница 3
````

Узнайте больше о синтаксисе Markdown Slidev в [руководстве по синтаксису](/guide/syntax).

## Технологический стек

Slidev стал возможным благодаря сочетанию этих инструментов и технологий.

- [Vite](https://vitejs.dev) - Чрезвычайно быстрый инструментарий для фронтенда
- [Vue 3](https://v3.vuejs.org/) с поддержкой [Markdown](https://daringfireball.net/projects/markdown/syntax) - Сосредоточьтесь на содержании, имея при этом возможность использовать HTML и компоненты Vue при необходимости
- [UnoCSS](https://github.com/unocss/unocss) - CSS-фреймворк на основе утилит по требованию, легко стилизуйте свои слайды
- [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Первоклассная поддержка фрагментов кода с возможностью Live Coding
- [RecordRTC](https://recordrtc.org) - Встроенная запись и отображение с камеры
- [VueUse](https://vueuse.org) семейство - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion) и т.д.
- [Iconify](https://iconify.design/) - Коллекция наборов иконок.
- [Drauu](https://github.com/antfu/drauu) - Поддержка рисования и аннотаций.
- [KaTeX](https://katex.org/) - Рендеринг математических формул LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Текстовые диаграммы.
