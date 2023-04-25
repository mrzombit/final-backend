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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async addUser(createUserDTO) {
        const newUser = await new this.userModel(createUserDTO);
        return newUser.save();
    }
    async createUser(createUserDTO) {
        const newUser = await new this.userModel(createUserDTO);
        return newUser.save();
    }
    async getUser(username) {
        const user = await this.userModel.findOne({ username }).exec();
        return user;
    }
    async getUserByID(userID) {
        const user = await this.userModel
            .findById(userID)
            .exec();
        return user;
    }
    async getUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }
    async editUser(userID, createUserDTO) {
        const editedUser = await this.userModel
            .findByIdAndUpdate(userID, createUserDTO, { new: true });
        return editedUser;
    }
    async deleteUser(userID) {
        const deletedUser = await this.userModel
            .findByIdAndRemove(userID);
        return deletedUser;
    }
    async findOne(username) {
        return this.userModel.findOne({
            username
        })
            .exec();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map