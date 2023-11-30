import { Router } from "express";
import { AuthRoutes } from "./presentation/auth/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use("/ping", AuthRoutes.routes);

        return router;
    }
}
