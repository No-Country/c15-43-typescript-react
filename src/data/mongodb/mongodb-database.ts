import mongoose, { ConnectOptions } from "mongoose";

async function connectToDB(): Promise<void> {
    const uri: string = "mongodb+srv://marcos:asd123@cluster0.ji4yiq5.mongodb.net/";

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
