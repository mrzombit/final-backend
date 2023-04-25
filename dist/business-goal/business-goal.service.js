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
exports.BusinessGoalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let BusinessGoalService = class BusinessGoalService {
    constructor(businessGoalModel) {
        this.businessGoalModel = businessGoalModel;
    }
    async addBusinessGoal(createBusinessGoalDTO) {
        const newBusinessGoal = await new this.businessGoalModel(createBusinessGoalDTO);
        return newBusinessGoal.save();
    }
    async getBusinessGoal(businessGoalID) {
        const businessGoal = await this.businessGoalModel
            .findById(businessGoalID)
            .exec();
        return businessGoal;
    }
    async getBusinessGoals() {
        const businessGoals = await this.businessGoalModel.find().exec();
        return businessGoals;
    }
    async editBusinessGoal(businessGoalID, createBusinessGoalDTO) {
        const editedBusinessGoal = await this.businessGoalModel
            .findByIdAndUpdate(businessGoalID, createBusinessGoalDTO, { new: true });
        return editedBusinessGoal;
    }
    async deleteBusinessGoal(businessGoalID) {
        const deletedBusinessGoal = await this.businessGoalModel
            .findByIdAndRemove(businessGoalID);
        return deletedBusinessGoal;
    }
};
BusinessGoalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('BusinessGoal')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BusinessGoalService);
exports.BusinessGoalService = BusinessGoalService;
//# sourceMappingURL=business-goal.service.js.map