/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: , or visit :
 * Author : Osama Bin Junaid
 */


import { Request, Response, NextFunction } from 'express'

import { JobRunner } from '../scheduler/Job-runner';

export const GetSheetData = async ( req: Request, res: Response, nextFn: NextFunction ) => {
    try {
            const { InstituteId } = req.params;
            const data = await JobRunner(InstituteId);
            res.json(data);

    } catch (error) {
        res.sendStatus(500)
        console.error('Error', error)
    }
}

export const InstituteRegn = ( req: Request, res: Response, nextFn: NextFunction ) => {

}

export const UpdateInstitute = ( req: Request, res: Response, nextFn: NextFunction ) => {

}


export const DeleteInstitute = ( req: Request, res: Response, nextFn: NextFunction ) => {

}