
import { connect } from 'mongoose';
import express from 'express';

import FacilitatorRoutes from './routes/facilitator';
import { HOST, PORT } from './configs/server-config';
import InstitutionRoutes from './routes/institution';
import JobRoutes from './routes/job';
import { JobScheduler } from './scheduler/Job-scheduler';
import logger from './utils/logger';
import ViewerRoutes from './routes/viewer';


// Create an express server
const Server = express();

Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

connect("mongodb://localhost:27017/gcptrack", (err)=>{
    if(err)
        throw Error("Cannot connect to server");
    else
        logger.info("Successfully connected to db");
})

/**
 * instution routes are restricted and will only be accessible to facilitator.
 * The APIs in this path will allow the facilitator to link a google sheet
 * add / update institution details, and disable the institution account.
 */

Server.use('/institute', InstitutionRoutes);

/**
 * viewer routes will be accessed by anyone using through the react frontend.
 * The APIs in this path will allow the facilitator to link a google sheet.
 * disable the institution account, update institutional information and many more.
 */

Server.use('/viewer', ViewerRoutes);

/**
 * facilitator routes are restricted to facilitator.
 * The APIs in this path will allow the facilitator signin and change its profile.
 */

Server.use('/facilitator', FacilitatorRoutes);


/**
 * facilitator routes are restricted to facilitator.
 * The APIs in this path will allow the facilitator trigger on demand jobs.
 */

Server.use('/job', JobRoutes);

Server.listen(PORT, HOST, () => {
    logger.info(`http server listening on http://${HOST}:${PORT}` );
})

JobScheduler()