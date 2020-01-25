import *  as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { UserActivityController } from 'src/controllers/user-activity/user-activity.controller';

const UserActivityCommentsSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    comment: String,
    timestamp: {
        type: Date,
        default: Date.now(),
    },
})

export const UserActivitySchema = new mongoose.Schema({
    userId: String,
    userName: String,
    fileName: String,
    likes: [String],
    timestamp: {
        type: Date,
        default: Date.now(),
    },
    comments: [UserActivityCommentsSchema],
})