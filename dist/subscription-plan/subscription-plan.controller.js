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
exports.SubscriptionPlanController = void 0;
const validate_object_id_pipes_1 = require("./../currency/shared/pipes/validate-object-id.pipes");
const create_subscription_plan_dto_1 = require("./dto/create-subscription-plan.dto");
const subscription_plan_service_1 = require("./subscription-plan.service");
const common_1 = require("@nestjs/common");
let SubscriptionPlanController = class SubscriptionPlanController {
    constructor(subscriptionPlanService) {
        this.subscriptionPlanService = subscriptionPlanService;
    }
    async addSubscriptionPlan(res, createSubscriptionPlanDTO) {
        const newSubscriptionPlan = await this.subscriptionPlanService.addSubscriptionPlan(createSubscriptionPlanDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'SubscriptionPlan has been submitted successfully!',
            post: newSubscriptionPlan,
        });
    }
    async getSubscriptionPlan(res, subscriptionPlanID) {
        console.log("here");
        const subscriptionPlan = await this.subscriptionPlanService.getSubscriptionPlan(subscriptionPlanID);
        if (!subscriptionPlan) {
            throw new common_1.NotFoundException('SubscriptionPlan does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(subscriptionPlan);
    }
    async getSubscriptionPlans(res) {
        const subscriptionPlans = await this.subscriptionPlanService.getSubscriptionPlans();
        return res.status(common_1.HttpStatus.OK).json(subscriptionPlans);
    }
    async editSubscriptionPlan(res, subscriptionPlanID, createSubscriptionPlanDTO) {
        const editedSubscriptionPlan = await this.subscriptionPlanService.editSubscriptionPlan(subscriptionPlanID, createSubscriptionPlanDTO);
        if (!editedSubscriptionPlan) {
            throw new common_1.NotFoundException('SubscriptionPlan does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'SubscriptionPlan has been successfully updated',
            subscriptionPlan: editedSubscriptionPlan,
        });
    }
    async deleteSubscriptionPlan(res, subscriptionPlanID) {
        const deletedSubscriptionPlan = await this.subscriptionPlanService.deleteSubscriptionPlan(subscriptionPlanID);
        if (!deletedSubscriptionPlan) {
            throw new common_1.NotFoundException('SubscriptionPlan does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'SubscriptionPlan has been deleted!',
            subscriptionPlan: deletedSubscriptionPlan,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_subscription_plan_dto_1.CreateSubscriptionPlanDTO]),
    __metadata("design:returntype", Promise)
], SubscriptionPlanController.prototype, "addSubscriptionPlan", null);
__decorate([
    (0, common_1.Get)('post/:subscriptionPlanID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('subscriptionPlanID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionPlanController.prototype, "getSubscriptionPlan", null);
__decorate([
    (0, common_1.Get)('subscriptionPlans'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriptionPlanController.prototype, "getSubscriptionPlans", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('subscriptionPlanID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_subscription_plan_dto_1.CreateSubscriptionPlanDTO]),
    __metadata("design:returntype", Promise)
], SubscriptionPlanController.prototype, "editSubscriptionPlan", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('subscriptionPlanID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionPlanController.prototype, "deleteSubscriptionPlan", null);
SubscriptionPlanController = __decorate([
    (0, common_1.Controller)('subscriptionPlan'),
    __metadata("design:paramtypes", [subscription_plan_service_1.SubscriptionPlanService])
], SubscriptionPlanController);
exports.SubscriptionPlanController = SubscriptionPlanController;
//# sourceMappingURL=subscription-plan.controller.js.map