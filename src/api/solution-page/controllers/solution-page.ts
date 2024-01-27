/**
 * solution-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::solution-page.solution-page', {
    find(ctx) {
        return strapi.service('api::solution-page.solution-page').find();
    },
});
