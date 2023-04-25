"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencySchema = void 0;
const mongoose = require("mongoose");
exports.CurrencySchema = new mongoose.Schema({
    name: {
        local: String,
        en: String,
    },
    abbreviation: String,
    weight: Number,
    created_date: Date,
});
//# sourceMappingURL=currency.schema.js.map