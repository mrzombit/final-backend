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
exports.CurrencyController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const common_1 = require("@nestjs/common");
const currency_service_1 = require("./currency.service");
const create_currency_dto_1 = require("./dto/create-currency.dto");
let CurrencyController = class CurrencyController {
    constructor(currencyService) {
        this.currencyService = currencyService;
    }
    async addCurrency(res, createCurrencyDTO) {
        const newCurrency = await this.currencyService.addCurrency(createCurrencyDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Currency has been submitted successfully!',
            currency: newCurrency,
        });
    }
    async getCurrency(res, currencyID) {
        const currency = await this.currencyService.getCurrency(currencyID);
        if (!currency) {
            throw new common_1.NotFoundException('Currency does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(currency);
    }
    async getCurrencys(res) {
        const currencys = await this.currencyService.getCurrencys();
        return res.status(common_1.HttpStatus.OK).json(currencys);
    }
    async editCurrency(res, currencyID, createCurrencyDTO) {
        const editedCurrency = await this.currencyService.editCurrency(currencyID, createCurrencyDTO);
        if (!editedCurrency) {
            throw new common_1.NotFoundException('Currency does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Currency has been successfully updated',
            currency: editedCurrency,
        });
    }
    async deleteCurrency(res, currencyID) {
        const deletedCurrency = await this.currencyService.deleteCurrency(currencyID);
        if (!deletedCurrency) {
            throw new common_1.NotFoundException('Currency does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Currency has been deleted!',
            currency: deletedCurrency,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_currency_dto_1.CreateCurrencyDTO]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "addCurrency", null);
__decorate([
    (0, common_1.Get)('post/:currencyID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('currencyID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrency", null);
__decorate([
    (0, common_1.Get)('currencys'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getCurrencys", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('currencyID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_currency_dto_1.CreateCurrencyDTO]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "editCurrency", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('currencyID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "deleteCurrency", null);
CurrencyController = __decorate([
    (0, common_1.Controller)('currency'),
    __metadata("design:paramtypes", [currency_service_1.CurrencyService])
], CurrencyController);
exports.CurrencyController = CurrencyController;
//# sourceMappingURL=currency.controller.js.map