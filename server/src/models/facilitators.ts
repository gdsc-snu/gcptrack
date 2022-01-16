import { Schema, model, Types } from 'mongoose';

export const FacilitatorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    displayPicture: {
        type: String,
    },
    isIntitutionConfigured: {
        type: Boolean,
        default: false
    },
    institution: {
        type: Types.ObjectId,
        ref: 'institutions'
    }
}, { timestamps: true , autoIndex: true} );

export default model('facilitators', FacilitatorSchema);