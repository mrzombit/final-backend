import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(res: any, createUserDTO: CreateUserDTO): Promise<any>;
    getUser(res: any, username: any): Promise<any>;
    getUserByID(res: any, userID: any): Promise<any>;
    getUserByUsername(res: any, username: any): Promise<any>;
    getUsers(res: any): Promise<any>;
    editUser(res: any, userID: any, createUserDTO: CreateUserDTO): Promise<any>;
    updateUser(res: any, username: any, createUserDTO: CreateUserDTO): Promise<any>;
    deleteUser(res: any, userID: any): Promise<any>;
}
