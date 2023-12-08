import { Schema, Document, Model, model } from "mongoose";

interface IFollow extends Document {
    user: Schema.Types.ObjectId;
    followed: Schema.Types.ObjectId;
}

const FollowSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    followed: { type: Schema.Types.ObjectId, ref: "User" }
});

const FollowModel: Model<IFollow> = model<IFollow>("Follow", FollowSchema);

export default FollowModel;
