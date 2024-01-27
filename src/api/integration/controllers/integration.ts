/**
 * integration controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::integration.integration', {
    findOne(ctx) {
        return strapi.service('api::integration.integration').findOne(ctx.params.id);
    },
    async find(...ctx) {
        return strapi.service("api::integration.integration").find(...ctx);
    },
});
