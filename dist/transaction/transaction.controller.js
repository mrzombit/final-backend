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
exports.TransactionController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
const transaction_service_1 = require("./transaction.service");
const common_1 = require("@nestjs/common");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async addTransaction(res, createTransactionDTO) {
        const newTransaction = await this.transactionService.addTransaction(createTransactionDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Transaction has been submitted successfully!',
            transaction: newTransaction,
        });
    }
    async getTransaction(res, transactionID) {
        const transaction = await this.transactionService.getTransaction(transactionID);
        if (!transaction) {
            throw new common_1.NotFoundException('Transaction does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(transaction);
    }
    async getTransactionsByUserID(res, userID) {
        const transactions = await this.transactionService.getTransactionsByUserID(userID);
        if (!transactions) {
            throw new common_1.NotFoundException('Transaction does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(transactions);
    }
    async getTransactions(res) {
        const transactions = await this.transactionService.getTransactions();
        return res.status(common_1.HttpStatus.OK).json(transactions);
    }
    async editTransaction(res, transactionID, createTransactionDTO) {
        const editedTransaction = await this.transactionService.editTransaction(transactionID, createTransactionDTO);
        if (!editedTransaction) {
            throw new common_1.NotFoundException('Transaction does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Transaction has been successfully updated',
            transaction: editedTransaction,
        });
    }
    async deleteTransaction(res, transactionID) {
        const deletedTransaction = await this.transactionService.deleteTransaction(transactionID);
        if (!deletedTransaction) {
            throw new common_1.NotFoundException('Transaction does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Transaction has been deleted!',
            transaction: deletedTransaction,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_transaction_dto_1.CreateTransactionDTO]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "addTransaction", null);
__decorate([
    (0, common_1.Get)('post/:transactionID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('transactionID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getTransaction", null);
__decorate([
    (0, common_1.Get)('user/:userID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getTransactionsByUserID", null);
__decorate([
    (0, common_1.Get)('transactions'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getTransactions", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('transactionID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_transaction_dto_1.CreateTransactionDTO]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "editTransaction", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('transactionID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "deleteTransaction", null);
TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map