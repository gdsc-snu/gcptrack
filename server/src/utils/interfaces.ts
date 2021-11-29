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
    institutionId: string,
    date: string,
    report: [I_StudentReportSchema]
}