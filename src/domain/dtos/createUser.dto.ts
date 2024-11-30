import { ZodError } from "zod";
import { createUserSchema } from "../schema/user.schema";
import { CustomError } from "../../config/CustomErrors";



export class CreateUserDto {
    private constructor(
        public name: string,
        public firstName: string,
        public email: string,
        public password: string,
        public active: boolean,
        public phone?: string,
        public img?: string,
        public description?: string,
    ) { }

    static RegisterUser(object: { [key: string]: any }): [string[], CreateUserDto?] {
        const { name, firstName, email, password, img, phone, confirmPassword, description } = object
        try {
            createUserSchema.parse({ name, firstName, email, password, phone, confirmPassword, description });
            return [
                [],
                new CreateUserDto(name, firstName, email, password, img, phone, description)
            ];
        } catch (error) {
            if (error instanceof ZodError) {
                return [error.errors.map(issues => issues.message), undefined]
            }
            throw CustomError.internal();
        }
    }
}