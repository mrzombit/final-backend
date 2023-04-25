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
exports.AssetAccountService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AssetAccountService = class AssetAccountService {
    constructor(assetAccountModel) {
        this.assetAccountModel = assetAccountModel;
    }
    async addAssetAccount(createAssetAccountDTO) {
        const newAssetAccount = await new this.assetAccountModel(createAssetAccountDTO);
        return newAssetAccount.save();
    }
    async getAssetAccount(assetAccountID) {
        const assetAccount = await this.assetAccountModel
            .findById(assetAccountID)
            .exec();
        return assetAccount;
    }
    async getAssetAccounts() {
        const assetAccounts = await this.assetAccountModel.find().exec();
        return assetAccounts;
    }
    async editAssetAccount(assetAccountID, createAssetAccountDTO) {
        const editedAssetAccount = await this.assetAccountModel
            .findByIdAndUpdate(assetAccountID, createAssetAccountDTO, { new: true });
        return editedAssetAccount;
    }
    async deleteAssetAccount(assetAccountID) {
        const deletedAssetAccount = await this.assetAccountModel
            .findByIdAndRemove(assetAccountID);
        return deletedAssetAccount;
    }
};
AssetAccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('AssetAccount')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AssetAccountService);
exports.AssetAccountService = AssetAccountService;
//# sourceMappingURL=asset-account.service.js.map