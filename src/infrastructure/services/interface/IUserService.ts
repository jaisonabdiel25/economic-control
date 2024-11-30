import { CreateUserDto } from "../../../domain/dtos/createUser.dto";
import { UserEntity } from "../../../domain/mappers/UserMapperResponse";


export abstract class IUserService {
    abstract createUser(user: CreateUserDto): Promise<UserEntity>;

}