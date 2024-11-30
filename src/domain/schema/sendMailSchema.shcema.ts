
import { z } from 'zod';

// Definir el esquema
export const sendMailSchema = z.object({
    to: z.string({ required_error: 'El correo es requerido', }).email({ message: 'El correo electrónico no es válido' }),
    subject: z.string({required_error: 'El subject es requerido'}).min(1, { message: 'El subject es requerido' }),
    html: z.string({required_error: 'el html es requerido'}).min(1, { message: 'El html es requerido' }),
});
