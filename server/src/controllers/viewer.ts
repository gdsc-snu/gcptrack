/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: google.dsc@snuniv.ac.in, or visit :
 */

import { NextFunction, Request, Response } from 'express';
import Institutions from '../models/institutions';
import logger from '../utils/logger';

export const GetInstituteData = (req: Request, res: Response, nextFn: NextFunction) => {
    // This api will return latest data to show in dashboard
}

export const SearchInstitute = async (req: Request, res: Response, nextFn: NextFunction) => {
    try{
        const instituteQuery = String(req.query.name) || '';
        const foundData = await Institutions.find(
            { "details.name": RegExp(instituteQuery, 'ig') },
            { _id: 0, "details.name": 1 }
        );
        res.json(foundData);
    } catch (err: any){
        logger.error("An error occured while searching institute");
        console.log(err);
        res.sendStatus(500);
    }
}

export const GetParticipantProgress = (req: Request, res: Response, nextFn: NextFunction) => {
    // This api will return participants progress data
}