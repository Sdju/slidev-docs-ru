# Установка

## Стартовый шаблон

> Slidev требует [**Node.js >=18.0**](https://nodejs.org/)

Лучший способ начать работу - использовать наш официальный стартовый шаблон:

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

Следуйте подсказкам, и слайд-шоу автоматически откроется для вас по адресу `http://localhost:3030/`.

Шаблон также содержит базовую настройку вместе с короткой демонстрацией и инструкциями о том, как начать работу с Slidev.

## Ручная установка

Если вы предпочитаете установить Slidev вручную или хотите интегрировать его в существующий проект, вы можете сделать следующее:

```bash
npm install @slidev/cli @slidev/theme-default
```

```bash
touch slides.md
```

```bash
npx slidev
```

## Глобальная установка

> Доступно с версии v0.14

Вы можете установить Slidev глобально с помощью следующей команды

```bash
npm i -g @slidev/cli
```

И затем использовать `slidev` везде без необходимости создавать проект каждый раз.

```bash
npx slidev
```

Эта команда также попытается использовать локальный `@slidev/cli`, если он будет найден в `node_modules`.

## Установка в Docker

Если вам нужен быстрый способ запустить презентацию с помощью контейнеров, вы можете использовать готовый [docker](https://hub.docker.com/r/tangramor/slidev) образ, поддерживаемый [tangramor](https://github.com/tangramor), или создать свой собственный.

Просто выполните следующую команду в вашей рабочей папке:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    -e NPM_MIRROR="https://registry.npmmirror.com" \
    tangramor/slidev:latest
```

**_Примечание_**: Вы можете использовать `NPM_MIRROR` для указания зеркала npm, чтобы ускорить процесс установки.

Если ваша рабочая папка пуста, будет сгенерирован шаблон `slides.md` и другие связанные файлы в вашей рабочей папке, и сервер будет запущен на порту `3030`.

Вы можете получить доступ к вашим слайдам по адресу `http://localhost:3030/`

### Создание развертываемых образов

Вы можете создать свой собственный проект slidev в виде docker-образа с помощью Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev
```

Создайте docker-образ: `docker build -t myppt .`

И запустите контейнер: `docker run --name myslides --rm --user node -p 3030:3030 myppt`

Вы можете посетить ваши слайды по адресу `http://localhost:3030/`

### Создание SPA который можно хостить

Выполните `docker exec -i slidev npx slidev build` на запущенном контейнере `slidev`. Это сгенерирует статические HTML-файлы в папке `dist`.

#### Размещение на GitHub Pages

Вы можете разместить `dist` как статический веб-сайт с помощью таких сервисов, как [GitHub Pages](https://tangramor.github.io/slidev_docker/) или GitLab Pages.

Поскольку в GitHub Pages URL может содержать подпапки, вы можете использовать опцию `--base=/<subfolder>/` во время процесса сборки, например, `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Чтобы избежать процесса сборки Jekyll, вам нужно добавить пустой файл `.nojekyll`.

#### Размещение через docker

Вы также можете самостоятельно разместить Slidev через docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

Или создать статический образ с помощью следующего Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Создайте docker-образ: `docker build -t mystaticppt .`

И запустите контейнер: `docker run --name myslides --rm -p 80:80 mystaticppt`

Вы можете посетить ваши слайды по адресу http://localhost/

Обратитесь к [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) для получения дополнительной информации.

## Интерфейс командной строки (CLI)

`@slidev/cli` предоставляет несколько команд, которые вы можете использовать с `npx slidev ...` или добавив скрипты в ваш `package.json`:

```json
{
  "script": {
    "dev": "slidev"
  }
}
```

В этом случае вы сможете запустить `npm run dev`.

Вы можете передавать опции любым командам:

- булевы опции считаются `true`, если они присутствуют, и `false` в противном случае (пример: `slidev --open`)
- некоторые опции могут иметь значения, которые вы можете добавить сразу после опции или используя символ `=` (пример: `slidev --port 8080` или `slidev --port=8080`)

Если вы используете npm-скрипты, не забудьте добавить `--` после npm-команды:

```bash
npm run slidev -- --open
```

### `slidev [entry]`

Запускает локальный сервер для Slidev.

- `[entry]` (`string`, по умолчанию: `slides.md`): путь к markdown-файлу, содержащему ваши слайды.

Опции:

- `--port`, `-p` (`number`, по умолчанию: `3030`): номер порта.
- `--open`, `-o` (`boolean`, по умолчанию: `false`): открыть в браузере.
- `--remote [password]` (`string`): слушать публичный хост и включить удаленное управление, если передано значение, то режим презентации является приватным и доступен только при передаче заданного пароля в параметре запроса URL `password`.
- `--bind` (`string`, по умолчанию: `0.0.0.0`): указать, какие IP-адреса должен прослушивать сервер в удаленном режиме.
- `--log` (`'error', 'warn', 'info', 'silent'`, по умолчанию: `'warn'`): уровень логирования.
- `--force`, `-f` (`boolean`, по умолчанию: `false`): заставить оптимизатор игнорировать кэш и пересобрать.
- `--theme`, `-t` (`string`): переопределить тему.

### `slidev build [entry]`

Собрать размещаемое SPA.

- `[entry]` (`string`, по умолчанию: `slides.md`): путь к markdown-файлу слайдов.

Опции:

- `--out`, `-o` (`string`, по умолчанию: `dist`): выходная директория.
- `--base` (`string`, по умолчанию: `/`): базовый URL (см. https://cli.vuejs.org/config/#publicpath)
- `--download` (`boolean`, по умолчанию: `false`): разрешить загрузку слайдов в формате PDF внутри SPA.
- `--theme`, `-t` (`string`): переопределить тему.

### `slidev export [entry]`

Экспортировать слайды в PDF (или другой формат). См. [Экспорт](/guide/exporting.html) для получения дополнительной информации.

- `[entry]` (`string`, по умолчанию: `slides.md`): путь к markdown-файлу входных слайдов.

Опции:

- `--output` (`string`, по умолчанию: использовать `exportFilename` (см. https://sli.dev/custom/#frontmatter-configures) или использовать `[entry]-export`): путь к выходному файлу.
- `--format` (`'pdf', 'png', 'pptx', 'md'`, по умолчанию: `'pdf'`): выходной формат.
- `--timeout` (`number`, по умолчанию: `30000`): таймаут для рендеринга страницы печати (см. https://playwright.dev/docs/api/class-page#page-goto).
- `--range` (`string`): диапазоны страниц для экспорта (пример: `'1,4-5,6'`).
- `--dark` (`boolean`, по умолчанию: `false`): экспортировать в темной теме.
- `--with-clicks`, `-c` (`boolean`, по умолчанию: `false`): экспортировать страницы для каждого клика (см. https://sli.dev/guide/animations.html#click-animations).
- `--theme`, `-t` (`string`): переопределить тему.

### `slidev format [entry]`

Форматировать markdown-файл.

- `[entry]` (`string`, по-умолчанию: `slides.md`): путь к входному markdown-файлу со слайдами.

### `slidev theme [subcommand]`

Операции, связанные с темой.

Подкоманды:

- `eject [entry]`: Извлечь текущую тему в локальную файловую систему
  - `[entry]` (`string`, по умолчанию: `slides.md`): путь к markdown-файлу входных слайдов.
  - Опции:
    - `--dir` (`string`, по умолчанию: `theme`): выходная директория.
    - `--theme`, `-t` (`string`): переопределить тему.
