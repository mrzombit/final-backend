"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessGoalSchema = void 0;
const mongoose = require("mongoose");
exports.BusinessGoalSchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
    },
    full_name: String,
    detail: {},
    created_date: Date,
});
//# sourceMappingURL=business-goal.schema.js.map