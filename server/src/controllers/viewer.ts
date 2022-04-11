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
import daily_report from '../models/dailyReport'

export const GetInstituteData = async (req: Request, res: Response, nextFn: NextFunction) => {
    try {
        const newInstituteData = await daily_report.find({ "institutionId": req.params.InstituteId}, { _id: 0, "report": 1 });
        res.send({
            message: 'institution details are as follows:',
            body: newInstituteData
        });
    } catch (error: any) {
        logger.error(error);
        res.status(500).send({
            message: error.message
        });
    };
}

export const SearchInstitute = async (req: Request, res: Response, nextFn: NextFunction) => {
    try{
        const instituteQuery = String(req.query.name) || '';
        const foundData = await Institutions.find(
            { "details.name": RegExp(instituteQuery, 'ig') },
            { _id: 1, "details.name": 1 }
        );
        res.json(foundData);
    } catch (err: any){
        logger.error("An error occured while searching institute");
        console.log(err);
        res.sendStatus(500);
    }
}

export const GetParticipantProgress = async (req: Request, res: Response, nextFn: NextFunction) => {
    try {
        const newParticipantData = await daily_report.find({ "institutionId" : req.params.InstituteId , "report.name": req.params.participantId }, { 
            "_id" : 0,
            "report": { 
                   $elemMatch: 
                    { 
                        name: req.params.participantId
                    },
            } 
        }).sort({ "createdAt" : -1}).limit(1);
        res.send({
            message: 'participant details are as follows:',
            body: newParticipantData
        });
    } catch (error: any) {
        logger.error(error);
        res.status(500).send({
            message: error.message
        });
    };
}