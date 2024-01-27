/**
 * career service
 */

import { factories } from '@strapi/strapi';
import { findAndPopulate } from '../../../common/utils/findAndPopulate';

findAndPopulate('api.career.career', ['benefits', 'benefits.icon', 'gallery'])

export default factories.createCoreService(
    'api::career.career', 
    findAndPopulate('api::career.career', ['benefits', 'benefits.icon', 'gallery'])
);
