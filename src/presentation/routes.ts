import { Router } from "express";
import { MailRoutes } from "./mail/routes";

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        // definir las rutas
        router.use('/api/mail', MailRoutes.routes)

        return router;
    }
}