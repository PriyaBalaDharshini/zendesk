import mongoose from './index.js';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const userSchema = new mongoose.Schema({
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
    phone: {
        type: String,
        required: [true, "Please enter phone number"],
        min: [10, "Enter valid phone number"]
    },
    type: {
        type: String,
        required: [true, "Please enter type"]
    },
    title: {
        type: String,
        required: [true, "Please enter title"]
    },
    description: {
        type: String,
        required: [true, "Please enter typdescription"]
    },
    status: {
        type: String,
        default: 'Open'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    assignedTo: {
        type: String
    },
    assignedAt: {
        type: Date
    },
    closedAt: {
        type: Date
    },
    resolution: {
        type: String
    }
},
    {
        collection: 'requests',
        versionKey: false
    }
);

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
