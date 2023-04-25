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
exports.AssetAccountController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const common_1 = require("@nestjs/common");
const asset_account_service_1 = require("./asset-account.service");
const create_asset_account_dto_1 = require("./dto/create-asset-account.dto");
let AssetAccountController = class AssetAccountController {
    constructor(assetAccountService) {
        this.assetAccountService = assetAccountService;
    }
    async addAssetAccount(res, createAssetAccountDTO) {
        const newAssetAccount = await this.assetAccountService.addAssetAccount(createAssetAccountDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'AssetAccount has been submitted successfully!',
            assetAccount: newAssetAccount,
        });
    }
    async getAssetAccount(res, assetAccountID) {
        const assetAccount = await this.assetAccountService.getAssetAccount(assetAccountID);
        if (!assetAccount) {
            throw new common_1.NotFoundException('AssetAccount does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(assetAccount);
    }
    async getAssetAccounts(res) {
        const assetAccounts = await this.assetAccountService.getAssetAccounts();
        return res.status(common_1.HttpStatus.OK).json(assetAccounts);
    }
    async editAssetAccount(res, assetAccountID, createAssetAccountDTO) {
        const editedAssetAccount = await this.assetAccountService.editAssetAccount(assetAccountID, createAssetAccountDTO);
        if (!editedAssetAccount) {
            throw new common_1.NotFoundException('AssetAccount does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'AssetAccount has been successfully updated',
            assetAccount: editedAssetAccount,
        });
    }
    async deleteAssetAccount(res, assetAccountID) {
        const deletedAssetAccount = await this.assetAccountService.deleteAssetAccount(assetAccountID);
        if (!deletedAssetAccount) {
            throw new common_1.NotFoundException('AssetAccount does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'AssetAccount has been deleted!',
            assetAccount: deletedAssetAccount,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_asset_account_dto_1.CreateAssetAccountDTO]),
    __metadata("design:returntype", Promise)
], AssetAccountController.prototype, "addAssetAccount", null);
__decorate([
    (0, common_1.Get)('post/:assetAccountID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('assetAccountID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AssetAccountController.prototype, "getAssetAccount", null);
__decorate([
    (0, common_1.Get)('assetAccounts'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssetAccountController.prototype, "getAssetAccounts", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('assetAccountID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_asset_account_dto_1.CreateAssetAccountDTO]),
    __metadata("design:returntype", Promise)
], AssetAccountController.prototype, "editAssetAccount", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('assetAccountID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AssetAccountController.prototype, "deleteAssetAccount", null);
AssetAccountController = __decorate([
    (0, common_1.Controller)('assetAccount'),
    __metadata("design:paramtypes", [asset_account_service_1.AssetAccountService])
], AssetAccountController);
exports.AssetAccountController = AssetAccountController;
//# sourceMappingURL=asset-account.controller.js.map