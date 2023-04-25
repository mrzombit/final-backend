"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlanSchema = void 0;
const mongoose = require("mongoose");
exports.SubscriptionPlanSchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
    },
    price: Number,
    properties: {
        is_ffc: Boolean,
        is_sensitivity: Boolean,
        is_export: Boolean,
        is_compared: Boolean,
    },
    created_date: Date,
    is_actived: Boolean,
});
//# sourceMappingURL=subscription-plan.schema.js.map