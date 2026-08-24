# strapi-plugin-dynamic-form-builder

Form builder plugin for Strapi 5.

## Features

- Form collection type with i18n support
- Draft & publish
- Double opt-in fields
- Content API routes

## Requirements

- Strapi `^5.16.0`
- Node.js `>=18`

## Installation

```bash
npm install strapi-plugin-dynamic-form-builder
```

Strapi auto-loads plugins whose npm package name starts with `strapi-plugin-`.

## Development

```bash
npm install
npm run build
npm run verify
```

Link into a Strapi app for local testing:

```bash
npm run watch:link
```

In your Strapi project:

```bash
npx yalc add strapi-plugin-dynamic-form-builder
npm install
npm run develop
```

## Publish

1. Update `version` in `package.json`
2. Run `npm run build && npm run verify`
3. Run `npm publish --tag beta`
4. Submit to the [Strapi Marketplace](https://market.strapi.io/submit-plugin)

## Plugin UID

- Content type: `plugin::form-builder.form`
- API path: `/api/form-builder/forms`

## Notes

This plugin references app-specific relations/components:

- `layout-component.form-field`
- `api::user-confirmation.user-confirmation`

Ensure your Strapi project defines these, or adjust the schema before publishing publicly.
