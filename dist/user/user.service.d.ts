import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    addUser(createUserDTO: CreateUserDTO): Promise<User>;
    createUser(createUserDTO: CreateUserDTO): Promise<User>;
    getUser(username: any): Promise<User>;
    getUserByID(userID: any): Promise<User>;
    getUsers(): Promise<User[]>;
    editUser(userID: any, createUserDTO: CreateUserDTO): Promise<User>;
    deleteUser(userID: any): Promise<any>;
    findOne(username: string): Promise<User | undefined>;
}
