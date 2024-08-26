# Использование аддонов

Аддоны — это наборы дополнительных компонентов, макетов, стилей, конфигураций и т.д., которые вы можете использовать в своей презентации.

Они довольно похожи на [темы](/themes/use), но в общем:

- они не влияют на глобальные стили ваших слайдов
- вы можете использовать несколько аддонов в одной презентации

Чтобы использовать аддоны, вам нужно установить их вручную через:

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

А затем объявить аддоны либо в вашем frontmatter:

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

Или в вашем файле `package.json`:

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2"
    ]
  }
}
```

## Примеры

- [slidev-addon-qrcode](https://github.com/kravetsone/slidev-addon-qrcode) — это аддон, который позволяет вам встраивать QR-коды в ваши слайды.

- [slidev-addon-remoji](https://github.com/twitwi/slidev-addon-remoji) — это аддон, который заменяет эмодзи на иконки в ваших слайдах для консистентности / печатных целей.