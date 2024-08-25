# Хостинг статики

## Создание одностраничных приложений (SPA)

Вы можете собрать слайды в самодостаточное SPA:

```bash
$ slidev build
```

Сгенерированное приложение будет доступно в `dist/`.

Вы можете протестировать сгенерированную сборку, используя веб-сервер (Apache, NGINX, Caddy и т.д.), или в проекте вы можете напрямую запустить: `npx vite preview`.

Затем вы можете разместить его на [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/) или любом другом веб-сервере или сервисе, который вы хотите. Теперь вы можете поделиться своими слайдами с остальным миром с помощью одной ссылки.

### Базовый путь

Чтобы развернуть ваши слайды под подпутями, вам нужно передать опцию `--base`. Путь `--base` **должен начинаться и заканчиваться** косой чертой `/`; например:

```bash
$ slidev build --base /talks/my-cool-talk/
```

Смотрите [документацию Vite](https://vitejs.dev/guide/build.html#public-base-path) для получения дополнительных деталей.

### Предоставление загружаемого PDF

Вы можете предоставить загружаемый PDF для зрителей вашего SPA с помощью следующей конфигурации:

```md
---
download: true
---
```

Slidev сгенерирует PDF-файл вместе со сборкой, и кнопка загрузки будет отображаться в SPA.

Вы также можете предоставить пользовательский URL для PDF. В этом случае процесс рендеринга будет пропущен.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

Это также можно сделать с помощью опции CLI `--download` (только `boolean`).

```bash
$ slidev build --download
```

При использовании опции загрузки вы также можете предоставить параметры экспорта:

- Используя [CLI параметры экспорта](/guide/exporting.html)
- Или [параметры экспорта frontmatter](/custom/#frontmatter-configures)

### Выходной каталог

Вы можете изменить выходной каталог, используя `--out`.

```bash
$ slidev build --out my-build-folder
```

### Watch-режим

Передав опцию `--watch`, сборка будет работать в watch-режиме и будет пересобираться каждый раз, когда источник изменяется.

```bash
$ slidev build --watch
```

### Несколько входных файлов

Вы можете собрать несколько наборов слайдов одновременно.

```bash
$ slidev build slides1.md slides2.md
```

Или

```bash
$ slidev build *.md
```

В этом случае каждый входной файл создаст папку, содержащую сборку в выходном каталоге.

## Примеры

Вот несколько примеров экспортированных SPA:

- [Шаблон-стартер](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) от [Anthony Fu](https://github.com/antfu)

Для получения дополнительной информации смотрите [Примеры](/showcases).

## Хостинг

Мы рекомендуем использовать `npm init slidev@latest` для создания вашего проекта, который содержит необходимые конфигурационные файлы для хостинговых сервисов из коробки.

### Netlify

- [Netlify](https://netlify.com/)

Создайте `netlify.toml` в корне вашего проекта со следующим содержимым.

```toml
[build]
publish = 'dist'
command = 'npm run build'

[build.environment]
NODE_VERSION = '20'

[[redirects]]
from = '/*'
to = '/index.html'
status = 200
```

Затем перейдите на панель управления Netlify и создайте новый сайт с репозиторием.

### Vercel

- [Vercel](https://vercel.com/)

Создайте `vercel.json` в корне вашего проекта со следующим содержимым.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Затем перейдите на панель управления Vercel и создайте новый сайт с репозиторием.

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Чтобы развернуть ваши слайды на GitHub Pages:

- загрузите все файлы проекта в ваш репозиторий (т.е. названный `name_of_repo`)
- создайте `.github/workflows/deploy.yml` со следующим содержимым для развертывания ваших слайдов на GitHub Pages через GitHub Actions.

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build -- --base /${{github.event.repository.name}}/

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

- В вашем репозитории перейдите в Настройки > Pages. В разделе "Build and deployment" выберите "Github Actions".
- Наконец, после выполнения всех рабочих процессов ссылка на слайды должна появиться в разделе Settings > Pages.