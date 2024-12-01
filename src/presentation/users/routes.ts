import { Router } from 'express';
import { UserController } from './controller';
import { UserRepository } from '../../infrastructure/repositories';
import { UserService } from '../../infrastructure/services';
export class UserRoutes {


    static get routes(): Router {
        const router = Router();

        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);
        const controller = new UserController(userService);

        // definir las rutas
        router.post('', controller.createUser);

        return router;
    }

}