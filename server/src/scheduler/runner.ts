import { getBadgesFromURL } from '../scraper/qwiklabs';
import { getDataFromSheet } from '../utils/sheets'
import { studentDetail } from '../utils/types';

export async function JobRunner(sheetId: string) {
    const sheetsData = await getDataFromSheet(sheetId);
    // console.log(sheetData)
    sheetsData?.forEach((sheetData: any[]) => {
        sheetData.forEach(async (studentData: studentDetail) => {
            console.log(await getBadgesFromURL(studentData['Google Cloud Skills Boost (previously Qwiklabs) Profile URL']))
        })
    })
}
