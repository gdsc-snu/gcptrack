import DailyReportsModel from './../models/dailyReport';
import { studentDetailWithBadges, I_StudentReportSchema } from './interfaces';

export async function saveDetailsToDB(InstitutionDetails: any, Data: any) {
    const dailyReportData = new DailyReportsModel({
        date: new Date(),
        institutionId: 'test-institute',
        report: formatReport(Data)
    });
    return await dailyReportData.save()
}

function formatReport(rawReports: studentDetailWithBadges[]){
    return rawReports.map((rawReport: studentDetailWithBadges): I_StudentReportSchema => {
        return {
            name: rawReport["Student Name"],
            email: rawReport["Student Email"],
            institution_name: rawReport["Institution"],
            enrollment_status: rawReport["Enrolment Status"],
            qwiklabs_url: rawReport["Google Cloud Skills Boost (previously Qwiklabs) Profile URL"],
            track1_badge_count: Number(rawReport["# of Skill Badges Completed in Track 1"]),
            track2_badge_count: Number(rawReport["# of Skill Badges Completed in Track 2"]),
            badges: rawReport["badges"]
        }
    })
}