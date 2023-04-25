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
exports.PeriodController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const common_1 = require("@nestjs/common");
const period_service_1 = require("./period.service");
const create_period_dto_1 = require("./dto/create-period.dto");
let PeriodController = class PeriodController {
    constructor(periodService) {
        this.periodService = periodService;
    }
    async addPeriod(res, createPeriodDTO) {
        const newPeriod = await this.periodService.addPeriod(createPeriodDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Period has been submitted successfully!',
            period: newPeriod,
        });
    }
    async getPeriod(res, periodID) {
        const period = await this.periodService.getPeriod(periodID);
        if (!period) {
            throw new common_1.NotFoundException('Period does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(period);
    }
    async getPeriods(res) {
        const periods = await this.periodService.getPeriods();
        return res.status(common_1.HttpStatus.OK).json(periods);
    }
    async editPeriod(res, periodID, createPeriodDTO) {
        const editedPeriod = await this.periodService.editPeriod(periodID, createPeriodDTO);
        if (!editedPeriod) {
            throw new common_1.NotFoundException('Period does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Period has been successfully updated',
            period: editedPeriod,
        });
    }
    async deletePeriod(res, periodID) {
        const deletedPeriod = await this.periodService.deletePeriod(periodID);
        if (!deletedPeriod) {
            throw new common_1.NotFoundException('Period does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Period has been deleted!',
            period: deletedPeriod,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_period_dto_1.CreatePeriodDTO]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "addPeriod", null);
__decorate([
    (0, common_1.Get)('post/:periodID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('periodID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "getPeriod", null);
__decorate([
    (0, common_1.Get)('periods'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "getPeriods", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('periodID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_period_dto_1.CreatePeriodDTO]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "editPeriod", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('periodID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "deletePeriod", null);
PeriodController = __decorate([
    (0, common_1.Controller)('period'),
    __metadata("design:paramtypes", [period_service_1.PeriodService])
], PeriodController);
exports.PeriodController = PeriodController;
//# sourceMappingURL=period.controller.js.map