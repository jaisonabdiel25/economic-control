import { BcryptAdapter } from "../../../config/bcrypt";
import { CustomError } from "../../../config/CustomErrors";
import { PreconditionValidation } from "../../../config/PreconditionValidation";
import { CreateUserDto } from "../../../domain/dtos/createUser.dto";
import { IUserRepository } from "../../repositories";
import { IMailService } from "../interface/IMailService";
import { IUserService } from "../interface/IUserService";
import { UserEntity, UserMapperResponse } from "../../../domain/mappers/UserMapperResponse";

export class UserService implements IUserService {
    constructor(
        private readonly _userRepository: IUserRepository,
        private readonly _emailService: IMailService
    ) { }

    async createUser(user: CreateUserDto): Promise<UserEntity> {

        try {
            const [error, createUserDto] = CreateUserDto.RegisterUser(user);

            if (error.length > 0) throw PreconditionValidation.PreconditionsFailed(error);

            const userByEmail = await this._userRepository.findUserByEmail(createUserDto!.email);

            if (userByEmail) throw CustomError.prevalidation('Ya existe un usuario con este email');

            const passwordhash = BcryptAdapter.hash(createUserDto!.password);

            createUserDto!.password = passwordhash;

            const newUser = await this._userRepository.createUser(createUserDto!);

            return UserMapperResponse.userMapperResponse(newUser);

        } catch (error) {

            if (error instanceof CustomError) throw error;
            if (error instanceof PreconditionValidation) throw error;
            throw CustomError.internal();
        }

    }


}