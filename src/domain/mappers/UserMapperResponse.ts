
export class UserEntity {

    constructor(
        public id: string,
        public name: string,
        public firstName: string,
        public email: string,
        public active: boolean,
        public phone?: string,
        public roles?: string[],
        public img?: string,
        public password?: string,
        public description?: string,
    ) { }
}

export class UserMapperResponse {

    static userMapperResponse(object: { [key: string]: any }) {

        const { id, name, email, active, phone, img, firstName, roles, description } = object;
        return new UserEntity(
            id,
            name,
            firstName,
            email,
            active,
            phone,
            roles,
            img,
            undefined,
            description
        )
    }
}