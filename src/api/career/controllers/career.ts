/**
 * career controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::career.career', {
    findOne(ctx) {
        return strapi.service('api::career.career').findOne(ctx.params.id);
    },
    async find(...ctx) {
        return strapi.service("api::career.career").find(...ctx);
    },
});
