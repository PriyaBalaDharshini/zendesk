import mongoose from './index.js';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const requestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        validate: {
            validator: validateEmail,
            message: props => `${props.value} is not a valid email `
        }
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "requests"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
    {
        collection: 'user',
        versionKey: false
    }
);

const RequestModel = mongoose.model("requests", requestSchema);
export default RequestModel;
