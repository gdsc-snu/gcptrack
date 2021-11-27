import { model, Schema } from 'mongoose';

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

const FacilitatorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    googleId: {
        type: String
    }
});

/*TODO: Find all the theme properties
** that can be applied to the institution.
*/
const InstitutionThemeSchema = new Schema({

})

const InstutionSchema = new Schema({
    details : InstitutionDetailSchema,
    facilitator: FacilitatorSchema,
    isActive: Boolean
},{ timestamps: true })

export default model('institution', InstutionSchema);