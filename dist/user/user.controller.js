"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt = require("bcrypt");
const validate_object_id_pipes_1 = require("./shared/pipes/validate-object-id.pipes");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_service_1 = require("./user.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(res, createUserDTO) {
        const saltOrRounds = 10;
        const shallowHashPassword = await bcrypt.hash(createUserDTO.password, saltOrRounds);
        createUserDTO.password = shallowHashPassword;
        const newUser = await this.userService.createUser(createUserDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User has been created successfully!',
            post: newUser,
        });
    }
    async getUser(res, username) {
        const user = await this.userService.getUser(username);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async getUserByID(res, userID) {
        const user = await this.userService.getUserByID(userID);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async getUserByUsername(res, username) {
        const user = await this.userService.findOne(username);
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async getUsers(res) {
        const users = await this.userService.getUsers();
        return res.status(common_1.HttpStatus.OK).json(users);
    }
    async editUser(res, userID, createUserDTO) {
        const editedUser = await this.userService.editUser(userID, createUserDTO);
        if (!editedUser) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user: editedUser,
        });
    }
    async updateUser(res, username, createUserDTO) {
        const user = await this.userService.findOne(username);
        console.log(user);
        const updatedUser = await this.userService.editUser(user._id, createUserDTO);
        if (!updatedUser) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User has been successfully updated',
            user: updatedUser,
        });
    }
    async deleteUser(res, userID) {
        const deletedUser = await this.userService.deleteUser(userID);
        if (!deletedUser) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User has been deleted!',
            user: deletedUser,
        });
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('getUser/:username'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('username', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('post/:userID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByID", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('username'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByUsername", null);
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editUser", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('username')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map