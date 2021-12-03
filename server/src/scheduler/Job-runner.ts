/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: , or visit :
 * Author : Osama Bin Junaid
 */

import { saveDetailsToDB } from '../utils/data-manager';
import { JobRunnerParams } from '../utils/interfaces';
import logger from '../utils/logger';
import { combineSheetAndQwiklabBadges } from '../utils/reducer';
import { getDataFromSheet, getSheetTitles } from '../utils/sheets';

export async function JobRunner( params: JobRunnerParams ) {
    try {
        const sheetTitles = await getSheetTitles(params.sheetID);
        const sheetName = sheetTitles.pop()!; //make sure that sheetTitles is not empty
        const sheetData = await getDataFromSheet(params.sheetID, sheetName);
        const report = await combineSheetAndQwiklabBadges(sheetData);
        await saveDetailsToDB({ sheetName, report, institutionId: params._id})
    } catch (error: any) {
        logger.error(error)
    }
}
