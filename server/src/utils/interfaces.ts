import { Types } from 'mongoose';

export interface studentDetail {
    "Student Name": string,
    "Student Email": string,
    "Institution": string,
    "Enrolment Date & Time": string,
    "Enrolment Status": string,
    "Google Cloud Skills Boost (previously Qwiklabs) Profile URL": string,
    "# of Skill Badges Completed in Track 1": string,
    "# of Skill Badges Completed in Track 2": string
}

export type studentDetailWithBadges = studentDetail & {
    badges: I_BadgeSchema[]
};

export interface I_BadgeSchema {
    badgeUrl: string,
    badgeName: string,
    earnedDate: Date
}

export interface I_StudentReportSchema {
    name: string,
    email: string,
    qwiklabs_url: string,
    institution_name: string,
    enrollment_status: string,
    track1_badge_count: number,
    track2_badge_count: number,
    badges: I_BadgeSchema[]
}

export interface I_DailyReport {
    institutionId: any,
    sheetName: string,
    report: [I_StudentReportSchema]
}

export interface JobLoaderParams {
    schedule: {
        hour: number,
        minute: number
    },
    sheetID: string,
    _id: Types.ObjectId,
    name: string
}

export interface JobRunnerParams {
    sheetID: string,
    _id: Types.ObjectId,
    name: string,
}