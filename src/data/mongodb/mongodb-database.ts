import mongoose, { ConnectOptions } from "mongoose";

async function connectToDB(): Promise<void> {
    const uri: string = envs.MONGODB_URI;

    const options: ConnectOptions = {
        useNewUrlParser: Boolean,
        useUnifiedTopology: Boolean
    };

    try {
        await mongoose.connect(uri, options);

        console.log("Conexión MongoDB");
    } catch (err) {
        console.error("Error al conectar con MongoDB", err);
    }
}

connectToDB();