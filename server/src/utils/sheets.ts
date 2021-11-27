import { GoogleAuth } from 'google-auth-library';
import { google, sheets_v4 } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFile : '/home/latitude/work/gcptrack/server/src/keys/keys.json',
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});


/**
 *Returns the data contained in the spreadsheet.
 * @param spreadsheetId
 * @returns sheets_v4.Schema$ValueRange
 */
export async function getDataFromSheet( spreadsheetId: string ): Promise< any[]| undefined>{
    //Auth client Object
    const authClientObject = await auth.getClient();

    //Google sheet instance
    const googleSheetInstance = google.sheets({ version: "v4", auth: authClientObject });

    //Get metadata about sheet
    const sheetInfo = await googleSheetInstance.spreadsheets.get({
        auth,
        spreadsheetId
    });

    //Get all sheets titles contained in the spreadsheet
    if( sheetInfo.data.sheets ){
        var sheetTitles = extractSheetTitles(sheetInfo.data.sheets);
        const sheetDataPromises = sheetTitles.map((sheetTitle) => {
            return readDataFromSheetTitles( googleSheetInstance, auth, spreadsheetId, `${sheetTitle}!1:1000`);
        });
        const sheetsData = await Promise.all(sheetDataPromises);
        const sheetObjects = sheetsData.map((sheetData) => sheetValueToObject(sheetData))
        return sheetObjects;
    }

    //Read from the spreadsheet

    //Return the data contained in the sheet
}

function extractSheetTitles(sheets: sheets_v4.Schema$Sheet[]): Array<string> {
    const sheetTitles : Array<string> = [];
    for(let sheet of sheets){
        if(sheet.properties?.title){
            sheetTitles.push(sheet.properties.title);
        } else {
            throw new Error("Every Sheet should have a title")
        }
    }
    return sheetTitles;
}

async function readDataFromSheetTitles( googleSheetInstance: sheets_v4.Sheets, auth: GoogleAuth , spreadsheetId: string, range?: string) {
    const readData = await googleSheetInstance.spreadsheets.values.get({
        auth, //auth object
        spreadsheetId, // spreadsheet id,
        range //range of cells to read from
    })
    return readData.data;
}

function sheetValueToObject( sheetValue: sheets_v4.Schema$ValueRange) {
    let sheetValueObjects = new Array<Object>();
    if(sheetValue.values){
        let index = 0;
        for(let i=1; i< sheetValue.values.length; i++){
            const sValue: {[key:string]: string} = {};
            for(let j = 0; j< sheetValue.values[i].length; j++){
                const keyName: string = sheetValue.values[0][index++];
                sValue[keyName] = sheetValue.values[i][j];
            }
            sheetValueObjects.push(sValue);
            index = 0;
        }
    }
    return sheetValueObjects;
}