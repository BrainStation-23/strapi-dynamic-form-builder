# strapi-plugin-dynamic-form-builder

Form builder plugin for Strapi 5.

## Features

- Form collection type with i18n support
- Draft & publish
- Nested form-field components shipped with the plugin
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

## Plugin UIDs

- Content type: `plugin::form-builder.form`
- Form field component: `form-builder.form-field`
- Form field option component: `form-builder.form-field-option`
- API path: `/api/form-builder/forms`

The plugin is self-contained. A blank Strapi app does not need extra app components.
