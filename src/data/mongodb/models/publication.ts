import { Schema, Document, Model, model } from "mongoose";

interface IPublication extends Document {
    text: string;
    file: string;
    created_at: string;
    user: Schema.Types.ObjectId;
}

const PublicationSchema: Schema = new Schema({
    text: String,
    file: String,
    created_at: String,
    user: { type: Schema.Types.ObjectId, ref: "User" }
});

const PublicationModel: Model<IPublication> = model<IPublication>("Publication", PublicationSchema);

export default PublicationModel;
