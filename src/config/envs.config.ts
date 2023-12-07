import "dotenv/config";
import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().asPortNumber(),
    MONGODB_USER: get("MONGO_USER").required().asString(),
    MONGODB_PASSWORD: get("MONGO_PASSWORD").required().asString()
};
