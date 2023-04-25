"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetAccountModule = void 0;
const asset_account_schema_1 = require("./schemas/asset-account.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const asset_account_controller_1 = require("./asset-account.controller");
const asset_account_service_1 = require("./asset-account.service");
let AssetAccountModule = class AssetAccountModule {
};
AssetAccountModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'AssetAccount', schema: asset_account_schema_1.AssetAccountSchema }]),
        ],
        controllers: [asset_account_controller_1.AssetAccountController],
        providers: [asset_account_service_1.AssetAccountService]
    })
], AssetAccountModule);
exports.AssetAccountModule = AssetAccountModule;
//# sourceMappingURL=asset-account.module.js.map