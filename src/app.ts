import { envs, logger } from "./config";
import { Server } from "./server";
import { AppRoutes } from "./routes/routes";
import { CustomError } from "./shared/custom.error";
import { MongoDatabase } from "./data/mongodb/mongodb-database";

(() => {
    main();
})();

async function main() {
    try {
        await MongoDatabase.connect({ mongoUrl: envs.MONGODB_URI, dbName: envs.DB_NAME });

        new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
    } catch (err) {
        logger.error(err);
        throw CustomError.internalServer();
    }
}
