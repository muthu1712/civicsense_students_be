import mongoose from 'mongoose';

const MetaSchema = new mongoose.Schema({
    _id : {type: Number, required: true},
    links: {
        howToPlay: {type: String, required: true},
    },
    termsAndCondition: {type: String, required: true},
    contributors: [{
        name: {type: String, required: true},
        email: {type: String, required: true},
        meta: {type: String, required: true}
    }],
    contactus: {
        email: {type: String, required: true},
        phone: {type: Number},
    },
    meta: {type: String},
    version: {type: Object, required: true},
    regions: {type: Object, required: true},
    revision: {type: Number, required: true}
}, {
    timestamps: true
});

const Meta = mongoose.model('meta', MetaSchema);

export default Meta;
