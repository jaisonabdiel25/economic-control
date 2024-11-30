import { Request, Response } from "express"
import { CustomError } from "../../config/CustomErrors";
import { PreconditionValidation } from "../../config/PreconditionValidation";
import { IUserService } from "../../infrastructure/services/interface/IUserService";
export class UserController {

    constructor(
        private readonly _userService: IUserService
    ) { }

    createUser = async (req: Request, res: Response) => {

        try {
            const result = await this._userService.createUser(req.body);
            res.status(200).json({ data: result, token: await jwtAdapter.generateToken({ data: result }) });
        } catch (error) {
            if (error instanceof PreconditionValidation) {
                PreconditionValidation.handleErrors(error, res);
            }
            CustomError.handleErrors(error, res);
        }
    }

}