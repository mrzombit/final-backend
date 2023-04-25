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
exports.BusinessGoalController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const common_1 = require("@nestjs/common");
const business_goal_service_1 = require("./business-goal.service");
const create_business_goal_dto_1 = require("./dto/create-business-goal.dto");
let BusinessGoalController = class BusinessGoalController {
    constructor(businessGoalService) {
        this.businessGoalService = businessGoalService;
    }
    async addBusinessGoal(res, createBusinessGoalDTO) {
        const newBusinessGoal = await this.businessGoalService.addBusinessGoal(createBusinessGoalDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'BusinessGoal has been submitted successfully!',
            businessGoal: newBusinessGoal,
        });
    }
    async getBusinessGoal(res, businessGoalID) {
        const businessGoal = await this.businessGoalService.getBusinessGoal(businessGoalID);
        if (!businessGoal) {
            throw new common_1.NotFoundException('BusinessGoal does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(businessGoal);
    }
    async getBusinessGoals(res) {
        const businessGoals = await this.businessGoalService.getBusinessGoals();
        return res.status(common_1.HttpStatus.OK).json(businessGoals);
    }
    async editBusinessGoal(res, businessGoalID, createBusinessGoalDTO) {
        const editedBusinessGoal = await this.businessGoalService.editBusinessGoal(businessGoalID, createBusinessGoalDTO);
        if (!editedBusinessGoal) {
            throw new common_1.NotFoundException('BusinessGoal does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'BusinessGoal has been successfully updated',
            businessGoal: editedBusinessGoal,
        });
    }
    async deleteBusinessGoal(res, businessGoalID) {
        const deletedBusinessGoal = await this.businessGoalService.deleteBusinessGoal(businessGoalID);
        if (!deletedBusinessGoal) {
            throw new common_1.NotFoundException('BusinessGoal does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'BusinessGoal has been deleted!',
            businessGoal: deletedBusinessGoal,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_business_goal_dto_1.CreateBusinessGoalDTO]),
    __metadata("design:returntype", Promise)
], BusinessGoalController.prototype, "addBusinessGoal", null);
__decorate([
    (0, common_1.Get)('post/:businessGoalID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('businessGoalID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessGoalController.prototype, "getBusinessGoal", null);
__decorate([
    (0, common_1.Get)('businessGoals'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BusinessGoalController.prototype, "getBusinessGoals", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('businessGoalID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_business_goal_dto_1.CreateBusinessGoalDTO]),
    __metadata("design:returntype", Promise)
], BusinessGoalController.prototype, "editBusinessGoal", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('businessGoalID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BusinessGoalController.prototype, "deleteBusinessGoal", null);
BusinessGoalController = __decorate([
    (0, common_1.Controller)('businessGoal'),
    __metadata("design:paramtypes", [business_goal_service_1.BusinessGoalService])
], BusinessGoalController);
exports.BusinessGoalController = BusinessGoalController;
//# sourceMappingURL=business-goal.controller.js.map