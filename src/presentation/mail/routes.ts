import { Router } from "express";

export class MailRoutes {

    static get routes(): Router {
        const router = Router();

        // definir las rutas
        router.post('/send', (req, res) => {
            res.send('send mail');
        });

        return router;
    }
}