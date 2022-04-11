import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

import { validateUserInfo } from '../utils/google';
import FacilitatorModel  from '../models/facilitators';
import logger from '../utils/logger';

// This is a dummy secret, replace it with a key rotation mechanism.
const Secret = 'mysupersecret-key';

export const SigninFacilitator = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;

        //Validate the token by calling the google Oauth Api
        const userInfo = await validateUserInfo(token);

        //Check if any user exist with this googleId
        const user = await FacilitatorModel.findOne({ googleId: userInfo.id });

        if (user == null) {
            //If the user  doesn't exist create a new One
            const newUser = new FacilitatorModel({
                googleId: userInfo.id,
                name: userInfo.name,
                email: userInfo.email,
                displayPicture: userInfo.picture
            })

            //Save the user to database
            const savedUser = await newUser.save();

            console.info(`New user with username "${savedUser.name}" created.`);

            //extract details
            const { displayPicture, userName, email } = savedUser;

            // generate a jsonwebtoken
            const token = jsonwebtoken.sign(JSON.stringify( { displayPicture, userName, email } ), Secret);

            // Send details to the caller
            res.json({
                status: true,
                isNew: true,
                token: token,
                user: { userName, email },
                userId: savedUser._id,
                message: "New User created sucessfully",
            })
        }
        else {

            const { displayPicture, userName, email } = user;

            //generate a jsonwebtoken
            const token = jsonwebtoken.sign(JSON.stringify({ displayPicture, userName, email }), Secret);

            // Send details to the caller
            res.json({
                status: true,
                isNew: false,
                token: token,
                user: { displayPicture, userName, email },
                userId: user._id,
                message: "Welcome back", //DONE: Generate a token for the user, and send it to the frontend
            })
        }
    } catch (error: any) {
        logger.error(error);
        res.status(500)
            .send({
                message: 'An error occured'
            })
    }
}

export const UpdateFacilitator =async (req: Request, res: Response) => {
    // TODO: Write logic that will allow facilitator to edit their profile
}