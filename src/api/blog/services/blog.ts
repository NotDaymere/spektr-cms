/**
 * blog service
 */

import { factories } from '@strapi/strapi';
import { findAndPopulate } from '../../../common/utils/findAndPopulate';

findAndPopulate('api::blog.blog', ['image', 'socials'])

export default factories.createCoreService(
    'api::blog.blog', 
    findAndPopulate('api::blog.blog', ['image', 'socials'])
);
