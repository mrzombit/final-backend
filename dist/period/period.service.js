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
exports.PeriodService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PeriodService = class PeriodService {
    constructor(periodModel) {
        this.periodModel = periodModel;
    }
    async addPeriod(createPeriodDTO) {
        const newPeriod = await new this.periodModel(createPeriodDTO);
        return newPeriod.save();
    }
    async getPeriod(periodID) {
        const period = await this.periodModel
            .findById(periodID)
            .exec();
        return period;
    }
    async getPeriods() {
        const periods = await this.periodModel.find().exec();
        return periods;
    }
    async editPeriod(periodID, createPeriodDTO) {
        const editedPeriod = await this.periodModel
            .findByIdAndUpdate(periodID, createPeriodDTO, { new: true });
        return editedPeriod;
    }
    async deletePeriod(periodID) {
        const deletedPeriod = await this.periodModel
            .findByIdAndRemove(periodID);
        return deletedPeriod;
    }
};
PeriodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Period')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PeriodService);
exports.PeriodService = PeriodService;
//# sourceMappingURL=period.service.js.map