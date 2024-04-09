import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        lowercase: true,
        unique : true
    },
    fullname: {
        type: String,
        require: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
    },
    imgUrl : {
        type: String, 
        default: "https://picsum.photos/id/237/200/300"
    }
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)
