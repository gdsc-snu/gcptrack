/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: , or visit :
 * Author : Osama Bin Junaid
 */

import { saveDetailsToDB } from '../utils/data-manager';
import { combineSheetAndQwiklabBadges } from '../utils/reducer';
import { getDataFromSheet } from '../utils/sheets';

export async function JobRunner(sheetId: string) {
    const sheetsData = await getDataFromSheet(sheetId, '30/10/2021') ?? [];

    const badgedSheet = await combineSheetAndQwiklabBadges(sheetsData);

    const dbStatus = await saveDetailsToDB('123', badgedSheet);

    console.log(dbStatus);
}
