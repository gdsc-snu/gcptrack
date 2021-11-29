/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: , or visit :
 * Author : Osama Bin Junaid
 */

import { getBadgesFromURL } from '../scraper/qwiklabs';
import { studentDetail, studentDetailWithBadges } from '../utils/interfaces';


export async function combineSheetAndQwiklabBadges(sheetData: any): Promise<Array<studentDetailWithBadges>> {
    const sheetDataWithBadgesPromise: Array<studentDetailWithBadges> = sheetData.map(async (studentDetail: studentDetail): Promise<studentDetailWithBadges> => {
        const badges = await getBadgesFromURL(studentDetail['Google Cloud Skills Boost (previously Qwiklabs) Profile URL']);
        return {...studentDetail, badges:badges } ;
    });

    const sheetDataWithBadges = await Promise.all(sheetDataWithBadgesPromise);
    return sheetDataWithBadges;
}