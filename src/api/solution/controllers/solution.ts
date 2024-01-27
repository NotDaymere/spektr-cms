/**
 * solution controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::solution.solution', {
    findOne(ctx) {
        return strapi.service('api::solution.solution').findOne(ctx.params.id);
    },
    async find(...ctx) {
        return strapi.service("api::solution.solution").find(...ctx);
    },
});
