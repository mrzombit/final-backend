"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodSchema = void 0;
const mongoose = require("mongoose");
exports.PeriodSchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
    },
    days: Number,
    months: Number,
    created_date: Date,
});
//# sourceMappingURL=period.schema.js.map