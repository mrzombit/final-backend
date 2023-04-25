"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phone_number: String,
    password: { type: String, required: true },
    payment_cards: [{
            is_primary: Boolean,
            name: String,
            code: String,
            expired_date: String,
            cvv: String,
        }],
    subscription_plan_id: String,
    project_ids: [String],
    is_cooperation: Boolean,
    transaction_ids: [String],
});
//# sourceMappingURL=user.schema.js.map