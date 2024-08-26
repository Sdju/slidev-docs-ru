import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

const CURRENT_VERSION = '0.48.0-beta.22'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Почему Slidev',
    link: '/guide/why',
  },
  {
    text: 'Начало работы',
    link: '/guide/',
  },
  {
    text: 'Установка',
    link: '/guide/install',
  },
  {
    text: 'Синтаксис Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Навигация',
    link: '/guide/navigation',
  },
  {
    text: 'Анимации',
    link: '/guide/animations',
  },
  {
    text: 'Перетаскиваемые элементы',
    link: '/guide/draggable',
  },
  {
    text: 'Режим докладчика',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Обзор слайдов',
    link: '/guide/overview',
  },
  {
    text: 'Рисование и аннотации',
    link: '/guide/drawing',
  },
  {
    text: 'Хостинг статики',
    link: '/guide/hosting',
  },
  {
    text: 'Запись презентации',
    link: '/guide/recording',
  },
  {
    text: 'Режим докладчика',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Рисование и аннотации',
    link: '/guide/drawing',
  },
  {
    text: 'Интеграции с редакторами',
    link: '/guide/editors',
  },
  {
    text: 'Часто задаваемые вопросы',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Компоненты',
    link: '/builtin/components',
  },
  {
    text: 'Макеты',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Использовать тему',
    link: '/themes/use',
  },
  {
    text: 'Галерея тем',
    link: '/themes/gallery',
  },
  {
    text: 'Написать тему',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Использовать аддон',
    link: '/addons/use',
  },
  {
    text: 'Написать аддон',
    link: '/addons/write-an-addon',
  },
]

const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Настройки',
    link: '/custom/',
  },
  {
    text: 'Структура каталога',
    link: '/custom/directory-structure',
  },
  {
    text: 'Шрифты',
    link: '/custom/fonts',
  },
  {
    text: 'Подсветка синтаксиса',
    link: '/custom/highlighters',
  },
  {
    text: 'Настройка Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Настройка Vite',
    link: '/custom/config-vite',
  },
  {
    text: 'Настройка UnoCSS',
    link: '/custom/config-unocss',
  },
  {
    text: 'Настройка Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Настройка KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Настройка Mermaid',
    link: '/custom/config-mermaid',
  },
  {
    text: 'Настройка парсера',
    link: '/custom/config-parser',
  },
  {
    text: 'Настройка маршрутов',
    link: '/custom/config-routes',
  },
  {
    text: 'Настройка сочетаний клавиш',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Настройка исполнителей кода',
    link: '/custom/config-code-runners',
  },
  {
    text: 'Настройка контекстного меню',
    link: '/custom/config-context-menu',
  },
  {
    text: 'Глобальный контекст Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Глобальные слои',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Примеры',
    link: '/showcases',
  },
  {
    text: 'Учебные ресурсы',
    link: '/resources/learning',
  },
  {
    text: 'Галлерея обложек',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
    text: 'Руководство',
    items: Guide,
  },
  {
    text: 'Темы',
    items: Theme,
  },
  {
    text: 'Аддоны',
    items: Addon,
  },
  {
    text: 'Настройки',
    items: Customizations,
  },
  {
    text: 'Встроенное',
    items: BuiltIn,
  },
  {
    text: 'Ресурсы',
    items: Resources,
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Презентационные слайды для разработчиков',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Презентационные слайды для разработчиков' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/slidev/edit/main/docs/:path',
      text: 'Предложить изменения на этой странице',
    },

    search: {
      provider: 'local',
    },

    nav: [
      {
        text: 'Руководство',
        items: Guide,
      },
      {
        text: 'Тема',
        items: [
          ...Theme,
          {
            text: 'Встроенные',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Настройка',
        items: [
          ...Customizations,
          {
            text: 'Аддон',
            items: Addon,
          },
        ],
      },
      {
        text: 'Ресурсы',
        items: Resources,
      },
      {
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Примечания к релизу', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Выпущено под лицензией MIT.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
