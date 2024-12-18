import { User } from "@prisma/client";
import { prisma } from "../../../clients";
import { IUserRepository } from "../interface/IUserRepository";
import { CreateUserDto } from "../../../domain/dtos/createUser.dto";
import { CustomError } from "../../../config/CustomErrors";



export class UserRepository implements IUserRepository {

    constructor() { }

    async findUserByEmail(email: string): Promise<User | null> {
        console.log(email);
        return await prisma.user.findUnique({ where: { email } })
    }

    async createUser(user: CreateUserDto): Promise<User> {
        try {
            return await prisma.user.create({ data: { ...user } })
        } catch (error) {
            console.log(error);
            throw CustomError.internal();
        }
    }

}