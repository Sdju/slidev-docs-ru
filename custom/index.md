# Настройки

Slidev полностью настраиваемый, от стилей до конфигураций инструментов. Он позволяет вам настраивать инструменты, которые лежат в основе ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco) и т.д.)

## Конфигурации Frontmatter

Вы можете настроить Slidev в frontmatter вашего первого слайда, ниже показаны значения по умолчанию для каждой опции.

```yaml
---
# идентификатор темы или имя пакета
# Узнайте больше: https://sli.dev/themes/use.html
theme: default
# заголовок вашего слайда, будет автоматически определен из первого заголовка, если не указан
title: Slidev
# шаблон заголовка для веб-страницы, `%s` будет заменен заголовком страницы
titleTemplate: '%s - Slidev'
# информация для ваших слайдов, может быть строкой markdown.
info: false
# поле автора для экспортируемого PDF или PPTX
author: Ваше имя здесь
# поле ключевых слов для экспортируемого PDF, разделенные запятыми.
keywords: keyword1,keyword2

# включить режим докладчика, может быть булевым, 'dev' или 'build'
presenter: true
# включить загрузку pdf в сборке SPA, может быть также пользовательский URL
download: false
# имя файла экспортируемого файла
exportFilename: slidev-exported
# параметры экспорта
# используйте параметры CLI экспорта в формате camelCase
# Узнайте больше: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# подсветка синтаксиса, может быть 'prism', 'shiki'
highlighter: shiki
# показывать номера строк в блоках кода
lineNumbers: false
# включить редактор monaco, может быть булевым, 'dev' или 'build'
monaco: true
# Откуда загружать типы monaco, может быть 'cdn', 'local' или 'none'
monacoTypesSource: local
# явно укажите дополнительные локальные пакеты для импорта типов
monacoTypesAdditionalPackages: []
# явно укажите дополнительные локальные модули как зависимости для запуска monaco
monacoRunAdditionalDeps: []
# загружать удаленные ресурсы локально с помощью vite-plugin-remote-assets, может быть булевым, 'dev' или 'build'
remoteAssets: false
# управляет тем, являются ли тексты на слайдах выбираемыми
selectable: true
# включить запись слайдов, может быть булевым, 'dev' или 'build'
record: dev
# включить контекстное меню Slidev, может быть булевым, 'dev' или 'build'
contextMenu: true
# включить блокировку пробуждения, может быть булевым, 'dev' или 'build'
wakeLock: true

# принудительная цветовая схема для слайдов, может быть 'auto', 'light' или 'dark'
colorSchema: auto
# режим маршрутизатора для vue-router, может быть "history" или "hash"
routerMode: history
# соотношение сторон для слайдов
aspectRatio: 16/9
# реальная ширина холста, единица в пикселях
canvasWidth: 980
# используется для настройки темы, будет инъектировать корневые стили как `--slidev-theme-x` для атрибута `x`
themeConfig:
  primary: '#5d8392'

# фавикон, может быть локальным путем к файлу или URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL сервера PlantUML, используемого для рендеринга диаграмм
plantUmlServer: 'https://www.plantuml.com/plantuml'
# шрифты будут автоматически импортированы из Google Fonts
# Узнайте больше: https://sli.dev/custom/fonts
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# настройки frontmatter по умолчанию применяются ко всем слайдам
defaults:
  layout: default
  # ...

# параметры рисования
# Узнайте больше: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# Атрибуты HTML-тегов
htmlAttrs:
  dir: ltr
  lang: en
---
```

Посмотрите [определения типов](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts) для получения дополнительных параметров.

## Конфигурация для каждого слайда

Кроме того, каждый слайд принимает следующую конфигурацию в блоке Frontmatter:

- `clicks` (`number`): Пользовательское количество кликов (узнайте больше [здесь](/guide/animations.html#custom-total-clicks-count)).
- `disabled` (`boolean`): Полностью отключить и скрыть слайд.
- `hide` (`boolean`): То же самое, что и `disabled`.
- `hideInToc` (`boolean`): Скрыть слайд для компонентов `<Toc>` (узнайте больше [здесь](/builtin/components.html#toc)).
- `layout` (`string`): Определяет компонент макета, применяемый к слайду (узнайте больше [здесь](/guide/syntax.html#front-matter-layouts) и [здесь](/builtin/layouts.html)).
- `level` (`number`): Переопределяет уровень заголовка для компонентов `<Title>` и `<Toc>` (только если также был объявлен `title`, узнайте больше [здесь](/builtin/components.html#titles)).
- `preload` (`boolean`, по умолчанию `true`): Предварительная загрузка следующего слайда (узнайте больше [здесь](/guide/animations.html#motion)).
- `routeAlias` (`string`): Создает псевдоним маршрута, который можно использовать в URL или с компонентом `<Link>` (узнайте больше [здесь](/builtin/components.html#link)).
- `src` (`string`): Включает файл markdown (узнайте больше [здесь](/guide/syntax.html#multiple-entries)).
- `title` (`string`): Переопределяет заголовок для компонентов `<Title>` и `<Toc>` (узнайте больше [здесь](/builtin/components.html#titles)).
- `transition` (`string | TransitionProps`): Определяет переход между слайдом и следующим (узнайте больше [здесь](/guide/animations.html#slide-transitions)).
- `zoom` (`number`): Пользовательский масштаб зума. Полезно для слайдов с большим количеством контента.
- `dragPos` (`Record<string,string>`): Используется как позиции перетаскиваемых элементов (узнайте больше [здесь](/guide/draggable.html)).

## Структура каталога

Slidev использует соглашения о структуре каталогов, чтобы минимизировать поверхность конфигурации и сделать расширения функциональности гибкими и интуитивно понятными.

Обратитесь к разделу [Структура каталога](/custom/directory-structure) для получения дополнительной информации.

## Инструменты конфигурации

- [Подсветка синтаксиса](/custom/highlighters)
- [Настройка Vue](/custom/config-vue)
- [Настройка Vite](/custom/config-vite)
- [Настройка UnoCSS](/custom/config-unocss)
- [Настройка Monaco](/custom/config-monaco)
- [Настройка KaTeX](/custom/config-katex)
- [Настройка Mermaid](/custom/config-mermaid)
