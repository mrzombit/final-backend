"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetAccountSchema = void 0;
const mongoose = require("mongoose");
exports.AssetAccountSchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
    },
    is_fixed_asset: Boolean,
    is_tangible_asset: Boolean,
    created_date: Date,
});
//# sourceMappingURL=asset-account.schema.js.map