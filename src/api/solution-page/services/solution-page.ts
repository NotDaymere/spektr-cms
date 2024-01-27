/**
 * solution-page service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::solution-page.solution-page', {
    find(): any {
        return strapi.db.query('api::solution-page.solution-page')
            .findOne({
                populate: ['review', 'reviewer_image', 'reviewer_worked_in']
            })
    }
});
