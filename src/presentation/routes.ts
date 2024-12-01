import { Router } from "express";
import { MailRoutes } from "./mail/routes";
import { UserRoutes } from "./users/routes";

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        // definir las rutas
        router.use('/api/mail', MailRoutes.routes);
        router.use('/api/user', UserRoutes.routes);

        return router;
    }
}