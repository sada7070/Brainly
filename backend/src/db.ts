import mongoose, { model, Schema } from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING!);

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    password: String
})
export const userModel = model("User", userSchema);

const contentSchema = new Schema({
    title: String,
    link: String,
    tags: {
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})
export const contentModel = model("Content", contentSchema);

const shareSchema = new Schema({
    hash: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})
export const shareModel = model("Share", shareSchema);