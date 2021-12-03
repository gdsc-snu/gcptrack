import { model, Schema, Types } from 'mongoose';

const InstitutionDetailSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    }
});

const InstutionSchema = new Schema({
    details : InstitutionDetailSchema,
    sheetID: {
        type: String,
        reqired: true,
    },
    facilitator: {
        type: Types.ObjectId,
        ref: 'facilitators'
    },
    schedule: {
        hour: {
            type: Number,
            default: 17
        },
        minute: {
            type: Number,
            default: 30
        }
    },
    lastSyncStatus: {
        type: String,
        enum: ["SUCESS", "FAILED"]
    },
    lastSyncTime: Date,
    isActive: {
        type: Boolean,
        default: true
    }
},{ timestamps: true })

export default model('institutions', InstutionSchema);