'use strict';

/**
 * form router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  form: createCoreRouter('plugin::form-builder.form', {
    type: 'content-api',
  }),
};
