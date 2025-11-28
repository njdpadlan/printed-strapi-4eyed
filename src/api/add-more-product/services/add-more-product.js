'use strict';

/**
 * add-more-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-more-product.add-more-product');
