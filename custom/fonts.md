# Шрифты

> Доступно с версии v0.20

Хотя вы можете использовать HTML и CSS для настройки шрифтов и стилей для ваших слайдов по своему усмотрению, Slidev также предоставляет удобный способ использовать их без усилий.

В вашем frontmatter настройте следующим образом:

```yaml
---
fonts:
  # в основном тексте
  sans: Robot
  # используйте с классом css `font-serif` из UnoCSS
  serif: Robot Slab
  # для блоков кода, встроенного кода и т.д.
  mono: Fira Code
---
```

И это всё.

Шрифты будут **автоматически импортированы из [Google Fonts](https://fonts.google.com/)**. Это означает, что вы можете использовать любые шрифты, доступные на Google Fonts, напрямую.

## Локальные шрифты

По умолчанию Slidev предполагает, что все шрифты, указанные через конфигурации `fonts`, поступают из Google Fonts. Если вы хотите использовать локальные шрифты, укажите `fonts.local`, чтобы отказаться от автоматического импорта.

```yaml
---
fonts:
  # как и в font-family в css, вы можете использовать `,` для разделения нескольких шрифтов для резервного варианта
  sans: 'Helvetica Neue,Robot'
  # отметьте 'Helvetica Neue' как локальный шрифт
  local: Helvetica Neue
---
```

## Жирность и курсив

По умолчанию Slidev импортирует три жирности `200`, `400`, `600` для каждого шрифта. Вы можете настроить их следующим образом:

```yaml
---
fonts:
  sans: Robot
  # по умолчанию
  weights: '200,400,600'
  # импортировать курсивные шрифты, по умолчанию `false`
  italic: false
---
```

Эта конфигурация применяется ко всем веб-шрифтам. Для более тонкой настройки веса каждого шрифта вам нужно будет вручную импортировать их с помощью [HTML](/custom/directory-structure.html#index-html) и CSS.

## Резервные шрифты

В большинстве случаев вам нужно только указать "специальный шрифт", и Slidev добавит резервные шрифты за вас, например:

```yaml
---
fonts:
  sans: Robot
  serif: Robot Slab
  mono: Fira Code
---
```

это приведет к

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Если вы хотите отключить резервные шрифты, настройте следующим образом:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallbacks: false
---
```

## Поставщики

- Опции: `google` | `none`
- По умолчанию: `google`

В настоящее время поддерживается только Google Fonts, в будущем планируется добавить больше поставщиков. Укажите `none`, чтобы полностью отключить функцию автоматического импорта и считать все шрифты локальными.

```yaml
---
fonts:
  provider: none
---
```