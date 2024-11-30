import { CustomError } from "../../config/CustomErrors";


export class SendMailDto {
    constructor(
        public to: string,
        public subject: string,
        public html: string,
    ) { }

    static sendMail(object: { [key: string]: any }): [string[], SendMailDto?] {
        const { to, subject, html } = object
        try {

            return [
                [],
                new SendMailDto(to, subject, html)
            ];
        } catch (error) {

            throw CustomError.internal('error inesperado');
        }
    }
}