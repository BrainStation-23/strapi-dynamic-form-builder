'use strict';

/**
 * form service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('plugin::form-builder.form');
