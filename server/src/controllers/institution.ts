/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: google.dsc@snuniv.ac.in, or visit :
 */

import { NextFunction, Request, Response } from 'express';
import institutions from '../models/institutions';
import logger from '../utils/logger';

export const GetInstituteDetails = async(req: Request, res: Response, nextFn: NextFunction) => {
    try {
        const newInstitute = await institutions.findById(req.query.id);
        res.send({
            message: ' institution details fetched',
            body: newInstitute
        });
    } catch (error: any) {
        logger.error(error);
        res.status(500).send({
            message: error.message
        });
    };
}

export const RegisterInstitute = async ( req: Request, res: Response, nextFn: NextFunction ) => {
    try {
    const newInstitute = new institutions(req.body);
    await newInstitute.save();
    res.send({
        message: 'new institution registered',
    });
} catch (error: any) {
    logger.error(error);
    res.status(500).send({
        message: error.message
    });
};

}

export const UpdateInstitute = async( req: Request, res: Response, nextFn: NextFunction ) => {
    try {
        const newInstitute = await institutions.findByIdAndUpdate(req.query.id, req.body);
        res.send({
            message: ' institution details updated to the following :',
            body: newInstitute
        });
    } catch (error: any) {
        logger.error(error);
        res.status(500).send({
            message: error.message
        });
    };
}


export const DeleteInstitute = async( req: Request, res: Response, nextFn: NextFunction ) => {
    try {
         await institutions.findByIdAndDelete(req.query.id);
        res.send({
            message: ' institution deleted from db'
        });
    } catch (error: any) {
        logger.error(error);
        res.status(500).send({
            message: error.message
        });
    };
}