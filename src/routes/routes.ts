import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use("/ping", AuthRoutes.routes);

        return router;
    }
}
