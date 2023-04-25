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
exports.SubscriptionPlanService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SubscriptionPlanService = class SubscriptionPlanService {
    constructor(subscriptionPlanModel) {
        this.subscriptionPlanModel = subscriptionPlanModel;
    }
    async addSubscriptionPlan(createSubscriptionPlanDTO) {
        const newSubscriptionPlan = await new this.subscriptionPlanModel(createSubscriptionPlanDTO);
        return newSubscriptionPlan.save();
    }
    async getSubscriptionPlan(subscriptionPlanID) {
        const subscriptionPlan = await this.subscriptionPlanModel
            .findById(subscriptionPlanID)
            .exec();
        return subscriptionPlan;
    }
    async getSubscriptionPlans() {
        const subscriptionPlans = await this.subscriptionPlanModel.find().exec();
        return subscriptionPlans;
    }
    async editSubscriptionPlan(subscriptionPlanID, createSubscriptionPlanDTO) {
        const editedSubscriptionPlan = await this.subscriptionPlanModel
            .findByIdAndUpdate(subscriptionPlanID, createSubscriptionPlanDTO, { new: true });
        return editedSubscriptionPlan;
    }
    async deleteSubscriptionPlan(subscriptionPlanID) {
        const deletedSubscriptionPlan = await this.subscriptionPlanModel
            .findByIdAndRemove(subscriptionPlanID);
        return deletedSubscriptionPlan;
    }
};
SubscriptionPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('SubscriptionPlan')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubscriptionPlanService);
exports.SubscriptionPlanService = SubscriptionPlanService;
//# sourceMappingURL=subscription-plan.service.js.map