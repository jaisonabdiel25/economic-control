import { createTransport, SentMessageInfo } from 'nodemailer'
import { SendMailDto } from '../domain/dtos/sendMail.dto'
import { envs } from './env'

export class MailConfigService {
    private transporter = createTransport({
        service: 'gmail',
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    async sendEmail(option: SendMailDto): Promise<SentMessageInfo> {
        const { to, subject, html } = option
        try {

            return await this.transporter.sendMail({
                to,
                subject,
                html
            })

        } catch (error) {
            return false
        }
    }
}