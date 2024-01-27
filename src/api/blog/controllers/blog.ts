/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', {
    findOne(ctx) {
        return strapi.service('api::blog.blog').findOne(ctx.params.id);
    },
    async find(...ctx) {
        return strapi.service("api::blog.blog").find(...ctx);
    },
});
