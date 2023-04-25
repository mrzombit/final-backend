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
exports.IndustryController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const common_1 = require("@nestjs/common");
const industry_service_1 = require("./industry.service");
const create_industry_dto_1 = require("./dto/create-industry.dto");
let IndustryController = class IndustryController {
    constructor(industryService) {
        this.industryService = industryService;
    }
    async addIndustry(res, createIndustryDTO) {
        const newIndustry = await this.industryService.addIndustry(createIndustryDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Industry has been submitted successfully!',
            industry: newIndustry,
        });
    }
    async getIndustry(res, industryID) {
        const industry = await this.industryService.getIndustry(industryID);
        if (!industry) {
            throw new common_1.NotFoundException('Industry does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(industry);
    }
    async getIndustrys(res) {
        const industrys = await this.industryService.getIndustrys();
        return res.status(common_1.HttpStatus.OK).json(industrys);
    }
    async editIndustry(res, industryID, createIndustryDTO) {
        const editedIndustry = await this.industryService.editIndustry(industryID, createIndustryDTO);
        if (!editedIndustry) {
            throw new common_1.NotFoundException('Industry does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Industry has been successfully updated',
            industry: editedIndustry,
        });
    }
    async deleteIndustry(res, industryID) {
        const deletedIndustry = await this.industryService.deleteIndustry(industryID);
        if (!deletedIndustry) {
            throw new common_1.NotFoundException('Industry does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Industry has been deleted!',
            industry: deletedIndustry,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_industry_dto_1.CreateIndustryDTO]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "addIndustry", null);
__decorate([
    (0, common_1.Get)('post/:industryID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('industryID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getIndustry", null);
__decorate([
    (0, common_1.Get)('industrys'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "getIndustrys", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('industryID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_industry_dto_1.CreateIndustryDTO]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "editIndustry", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('industryID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IndustryController.prototype, "deleteIndustry", null);
IndustryController = __decorate([
    (0, common_1.Controller)('industry'),
    __metadata("design:paramtypes", [industry_service_1.IndustryService])
], IndustryController);
exports.IndustryController = IndustryController;
//# sourceMappingURL=industry.controller.js.map