<div align="center">
    <img style="width: 450px; height: auto;" src="https://raw.githubusercontent.com/BrainStation-23/strapi-preview-multidomain-plugin/HEAD/public/dynamic-form-builder.jpeg" alt="Logo for Strapi Dynamic form builder plugin" />
    <h1>Strapi Dynamic Form Builder</h1>
    <p>A Strapi 5 plugin for building and managing multilingual dynamic forms from the Content Manager. Forms, field components, and Content API routes ship with the package, so a blank Strapi app can install it and start without extra app-level components.</p>
    <p>
      <a href="https://www.npmjs.com/package/strapi-plugin-dynamic-form-builder">
        <img src="https://img.shields.io/npm/v/strapi-plugin-dynamic-form-builder.svg" alt="Strapi plugin Dynamic Form Builder" />
      </a>
      <a href="https://strapi.io">
        <img src="https://img.shields.io/badge/strapi-v5-blue" alt="Strapi supported version" />
      </a>
      <a href="https://github.com/BrainStation-23/strapi-dynamic-form-builder">
        <img src="https://img.shields.io/badge/github-repo-blue?logo=github" alt="Github Strapi plugin Dynamic Form Builder" />
      </a>
    </p>
  </div>
  
# Strapi plugin Dynamic Form Builder

[![npm version](https://img.shields.io/npm/v/strapi-plugin-dynamic-form-builder/beta.svg)](https://www.npmjs.com/package/strapi-plugin-dynamic-form-builder)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Strapi](https://img.shields.io/badge/Strapi-v5-blueviolet)](https://strapi.io)

## Table of contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Content API](#content-api)
- [Permissions](#permissions)
- [Identifiers](#identifiers)
- [Development](#development)
- [Reporting issues](#reporting-issues)
- [License](#license)

## Features

- **Dynamic Form** collection type in Content Manager, with draft & publish
- Internationalization (i18n) on form fields
- Nested **Form Field** and **Form Field Option** components included in the plugin
- Field types: `text`, `textarea`, `checkbox`, `radio`, `select`, `phone`, `date`
- Validation options: required, min/max length, pattern rules
- Content API routes for listing and fetching forms

This plugin does not collect usage data.

## Requirements

- [Strapi](https://strapi.io) `^5.16.0`
- Node.js `>=18`
- npm `>=10`

`@strapi/strapi` is a peer dependency. The plugin is compatible with Strapi 5.

## Installation

Add the package to your Strapi application:

```bash
# npm
npm install strapi-plugin-dynamic-form-builder

# yarn
yarn add strapi-plugin-dynamic-form-builder

# pnpm
pnpm add strapi-plugin-dynamic-form-builder
```

Strapi auto-loads packages whose name starts with `strapi-plugin-`. After install, rebuild the admin panel and start the app:

```bash
npm run build
npm run develop
```

## Configuration

Enable the plugin in `config/plugins.js` or `config/plugins.ts` if you want an explicit entry. This is optional for auto-loaded `strapi-plugin-*` packages.

```js
module.exports = () => ({
  'form-builder': {
    enabled: true,
  },
});
```

```ts
export default () => ({
  'form-builder': {
    enabled: true,
  },
});
```

The plugin id is `form-builder` (`package.json` → `strapi.name`).

No other configuration is required. There is no settings page and no environment variables.

## Usage

### Create a form

1. Open **Content Manager**.
2. Under Collection Types, open **Dynamic Form**.
3. Create an entry and fill in the form details.
4. Add one or more items under **Fields**.
5. Save and publish.

Required form attributes:

| Attribute | Type | Description |
| --- | --- | --- |
| `FormName` | string | Display name of the form |
| `Slug` | uid | Unique identifier |
| `SenderEmailAddress` | email | From address used when sending mail |
| `RecipientEmailAddress` | email | Destination address |
| `SuccessMessage` | richtext | Message shown after a successful submit |
| `ErrorMessage` | richtext | Message shown after a failed submit |
| `SubmitButtonLabel` | string | Label of the submit button |

Optional attributes:

| Attribute | Type | Description |
| --- | --- | --- |
| `FormExcerpt` | richtext | Intro or helper text |
| `EmailTemplate` | text | Email body template |
| `Fields` | component (repeatable) | Form inputs (`form-builder.form-field`) |

### Form fields

Each field in `Fields` uses the plugin component `form-builder.form-field`:

| Attribute | Required | Description |
| --- | --- | --- |
| `Name` | yes | Field key sent with the submission |
| `Type` | yes | `text`, `textarea`, `checkbox`, `radio`, `select`, `phone`, or `date` |
| `Required` | yes | Whether the input is required (default `false`) |
| `Label` | no | Visible label |
| `Placeholder` | no | Placeholder text |
| `Options` | no | Repeatable options for `select`, `radio`, or `checkbox` (`form-builder.form-field-option`) |
| `RequiredMessage` | no | Message when a required field is empty |
| `MinLength` / `MaxLength` | no | Length limits |
| `MinLengthErrorMessage` / `MaxLengthErrorMessage` | no | Length validation messages |
| `IsPatternValidationEnabled` | no | Enable regex validation |
| `ValidationRules` | no | Pattern string |
| `ValidationErrorMessage` | no | Pattern validation message |

Option items (`form-builder.form-field-option`) have `Name`, `Text`, and `Required`.

## Content API

Content API prefix:

```
/api/form-builder/forms
```

Typical requests (permissions must allow them):

```http
GET /api/form-builder/forms
GET /api/form-builder/forms/:id
GET /api/form-builder/forms?locale=en
```

Populate fields and options when you need the full form definition:

```http
GET /api/form-builder/forms?populate[Fields][populate]=Options
```

## Permissions

In **Settings → Users & Permissions plugin → Roles**, grant the Public or Authenticated role access to `form-builder` form actions (`find`, `findOne`, and any other actions you need). Until those permissions are set, Content API calls return `403`.

Admin users manage forms through Content Manager with their usual admin permissions.

## Identifiers

| Kind | UID |
| --- | --- |
| Plugin id | `form-builder` |
| Content type | `plugin::form-builder.form` |
| Form field component | `form-builder.form-field` |
| Form field option component | `form-builder.form-field-option` |
| REST path | `/api/form-builder/forms` |

The plugin is self-contained. You do not need to create `layout-component.form-field` (or any other host-app component) for it to boot.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/BrainStation-23/strapi-dynamic-form-builder.git
cd strapi-dynamic-form-builder
npm install
```

Build and verify the plugin:

```bash
npm run build
npm run verify
```

Watch while developing against a local Strapi app:

```bash
npm run watch:link
```

In the Strapi app:

```bash
npx yalc add strapi-plugin-dynamic-form-builder
npm install
npm run develop
```

Create a local tarball:

```bash
npm run pack
```

Then install it in a Strapi project:

```bash
npm install /path/to/strapi-plugin-dynamic-form-builder-0.1.2-beta.tgz
npm run develop
```

## Reporting issues

This plugin is maintained by [BrainStation-23](https://github.com/BrainStation-23).

Please report bugs, questions, and feature requests on GitHub:

[https://github.com/BrainStation-23/strapi-dynamic-form-builder/issues](https://github.com/BrainStation-23/strapi-dynamic-form-builder/issues)

Include your Strapi version, Node.js version, and steps to reproduce.

## License

This plugin is licensed under the [MIT License](./LICENSE).
