import { Request, Response } from "express"
import { CustomError } from "../../config/CustomErrors";
import { PreconditionValidation } from "../../config/PreconditionValidation";
import { IMailService } from "../../infrastructure/services";
export class MailController {

    constructor(
        private readonly _mailService: IMailService
    ) { }

    sendMail = async (req: Request, res: Response) => {
        try {
            const result = await this._mailService.sendMail(req.body);

            res.json({ accepted: result.accepted, rejected: result.rejected })
        } catch (error) {
            if (error instanceof PreconditionValidation) {
                PreconditionValidation.handleErrors(error, res);
            }
            CustomError.handleErrors(error, res);
        }
    }

}