/**
 * solution service
 */

import { factories } from '@strapi/strapi';
import { findAndPopulate } from '../../../common/utils/findAndPopulate';

export default factories.createCoreService(
    'api::solution.solution', 
    findAndPopulate('api::solution.solution', ['steps', 'steps.image'])
);
