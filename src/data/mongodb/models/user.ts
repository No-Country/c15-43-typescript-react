import { Schema, Document, Model, model } from "mongoose";

interface IUser extends Document {
    name: string;
    surname: string;
    nick: string;
    email: string;
    password: string;
    role: string;
    image: string;
}

const UserSchema: Schema = new Schema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String,
    image: String
});

const UserModel: Model<IUser> = model<IUser>("User", UserSchema);

export default UserModel;
