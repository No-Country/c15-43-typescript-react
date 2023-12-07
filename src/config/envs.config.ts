import "dotenv/config";
import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().asPortNumber(),
    NODE_ENV: get("NODE_ENV").required().asString(),
    MONGODB_URI: get("MONGODB_URI").required().asString(),
    DB_NAME: get("DB_NAME").required().asString()
};
