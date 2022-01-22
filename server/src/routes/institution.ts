/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: , or visit :
 */
import { Router } from 'express';
import { DeleteInstitute, GetInstituteDetails, RegisterIntitute, UpdateInstitute } from '../controllers/institution';

const router =  Router();

router.get('/fetch-institute', GetInstituteDetails);

router.post('/register-institutue', RegisterIntitute);

router.patch('/:instituteId/update-institute', UpdateInstitute);

router.delete('/:instituteId/delete-institute', DeleteInstitute);

export default router;