import { Schema, Document, Model, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

interface IMessage extends Document {
    text: string;
    viewed: string;
    created_at: string;
    emmiter: Schema.Types.ObjectId;
    receiver: Schema.Types.ObjectId;
}

const messageSchema: Schema = new Schema({
    text: String,
    viewed: String,
    created_at: String,
    emmiter: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" }
});

messageSchema.plugin(mongoosePaginate);

const MessageModel: Model<IMessage> = model<IMessage>("Message", messageSchema);

export default MessageModel;
