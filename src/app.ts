import { envs, logger } from "./config";
import { Server } from "./server";
import { AppRoutes } from "./routes/routes";

(async () => {
    main();
})();

async function main() {
    try {
        new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
    } catch (err) {
        logger.error(err);
        throw CustomError.internalServer();
    }
}
