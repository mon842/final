import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter a name'],
        unique: true,

    },
    email: {
        type: String,
        required: [true, 'please enter a email address'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please enter a passeword'],
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String
    },
    heardAbout: {
        type: [String],
        required: true
    },
    city: {
        type: String
    },
    selectedState: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;