import express from 'express';

import AdminRoutes from './routes/admin';
import ViewerRoutes from './routes/viewer';

import { HOST, PORT } from './configs/server-config';
import { connect } from 'mongoose';
import { JobRunner } from './scheduler/Job-runner';
import { JobScheduler } from './scheduler/Job-scheduler';
import logger from './utils/logger';

// Create an express server
const Server = express();

Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

connect("mongodb://localhost:27017/gcptrack", (err)=>{
    if(err)
        throw Error("Cannot connect to server");
    else
        logger.log("Successfully connected to db");
})

/**
 * admin routes are restricted and will only be accessible to facilitator.
 * The APIs in this path will allow the facilitator to link a google sheet
 * add / update institution details, and disable the institution account.
 */

Server.use('/admin', AdminRoutes);

/**
 * viewer routes will be accessed by anyone using through the react frontend.
 * The APIs in this path will allow the facilitator to link a google sheet.
 * disable the institution account, update institutional information and many more.
 */

Server.use('/viewer', ViewerRoutes);

Server.listen(PORT, () => {
    logger.log(`http server listening on http://${HOST}:${PORT}` );
})

JobScheduler()