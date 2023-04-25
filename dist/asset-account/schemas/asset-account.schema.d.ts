import * as mongoose from 'mongoose';
export declare const AssetAccountSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: {
        th?: string;
        en?: string;
    };
    created_date?: Date;
    is_fixed_asset?: boolean;
    is_tangible_asset?: boolean;
}>;
