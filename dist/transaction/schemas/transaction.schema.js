"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
const mongoose = require("mongoose");
exports.TransactionSchema = new mongoose.Schema({
    amount: Number,
    payment_method: String,
    created_date: Date,
    subscription_plan_id: String,
    user_id: String,
});
//# sourceMappingURL=transaction.schema.js.map