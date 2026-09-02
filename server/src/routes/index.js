import { factories } from '@strapi/strapi';

export default {
  form: factories.createCoreRouter('plugin::form-builder.form', {
    type: 'content-api',
  }),
};
