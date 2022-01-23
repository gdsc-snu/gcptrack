/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: google.dsc@snuniv.ac.in, or visit :
 */

import { NextFunction, Request, Response } from 'express';

export const TriggerForceSync = (req: Request, res: Response, nextFn: NextFunction) => {
    // This api will force sync the google sheet data
}