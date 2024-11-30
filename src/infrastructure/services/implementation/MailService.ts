import { SentMessageInfo } from "nodemailer";
import { IMailService } from "../interface/IMailService";
import { SendMailDto } from "../../../domain/dtos/sendMail.dto";
import { CustomError } from "../../../config/CustomErrors";
import { MailConfigService } from "../../../config/mail";
import { PreconditionValidation } from "../../../config/PreconditionValidation";


export class MailService implements IMailService {

    constructor() { }

    async sendMail(sendMailDto: SendMailDto): Promise<SentMessageInfo> {
        try {

            const [error, registerUserDto] = SendMailDto.sendMail(sendMailDto);

            if (error.length > 0)  throw PreconditionValidation.PreconditionsFailed(error);

            const mailConfig = new MailConfigService()
            return await mailConfig.sendEmail(registerUserDto!);

        } catch (error) {
            if (error instanceof PreconditionValidation) throw error;
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }
}