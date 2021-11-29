/* Copyright (C) 2021 GDSC SNU - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the BSD 3-Clause License.
 *
 * You should have received a copy of the BSD 3-Clause license with
 * this file. If not, please write to: , or visit :
 * Author : Osama Bin Junaid
 */

import { model, Schema } from 'mongoose';
import { I_BadgeSchema, I_DailyReport, I_StudentReportSchema } from '../utils/interfaces';

const BadgeSchema = new Schema< I_BadgeSchema >({
    badgeUrl: String,
    badgeName: String,
    earnedDate: Date
})

const StudentReportSchema = new Schema< I_StudentReportSchema >({
    name: String,
    email: String,
    qwiklabs_url: String,
    institution_name: String,
    enrollment_status: String,
    track1_badge_count: Number,
    track2_badge_count: Number,
    badges: [BadgeSchema]
})

const DailyReport = new Schema< I_DailyReport >({
    institutionId: {
        required: true,
        type: String
    },
    date: String,
    report: [StudentReportSchema]
}, {timestamps: true});

export default model('daily_report', DailyReport);