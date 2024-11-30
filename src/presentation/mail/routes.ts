import { Router } from "express";
import { MailService } from "../../infrastructure/services/implementation/MailService";
import { MailController } from "./controller";

export class MailRoutes {

    static get routes(): Router {
        const router = Router();

        const mailService = new MailService();
        const controller = new MailController(mailService);

        // definir las rutas
        router.post('/send', controller.sendMail);

        return router;
    }
}