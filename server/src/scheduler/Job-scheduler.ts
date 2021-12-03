import schedule  from 'node-schedule';

import { JobLoaderParams } from '../utils/interfaces';
import logger from '../utils/logger';
import InstituteModel from './../models/institutions';
import { JobRunner } from './Job-runner';

export async function JobScheduler() {
    logger.log( `Scheduler started on ${Date().toString()}` );
    const schedules: Array<JobLoaderParams> = await InstituteModel.find({}, { schedule: 1, _id: 1, sheetID: 1, name: '$details.name' });
    const Jobs = schedules.map((Ischedule) => {
        //create a new recurrence rule that will daily sync the sheet
        const rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = new schedule.Range(0,6);
        rule.hour = Ischedule.schedule.hour;
        rule.minute = Ischedule.schedule.minute;
        logger.warn("test")
        logger.error("test Error")
        return schedule.scheduleJob('* * * * *', async() => {
            // await JobRunner(Ischedule)
        })
    });
}