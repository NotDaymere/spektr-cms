/**
 * integration service
 */

import { factories } from '@strapi/strapi';
import { findAndPopulate } from '../../../common/utils/findAndPopulate';

export default factories.createCoreService(
    'api::integration.integration', 
    findAndPopulate('api::integration.integration', ['list', 'list.icon'])
);
