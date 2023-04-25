"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrySchema = void 0;
const mongoose = require("mongoose");
exports.IndustrySchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
    },
    is_b2b: Boolean,
    is_b2c: Boolean,
    category: {
        th: String,
        en: String,
    },
    created_date: Date,
});
//# sourceMappingURL=industry.schema.js.map