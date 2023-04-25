import * as mongoose from 'mongoose';
export declare const CurrencySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: {
        local?: string;
        en?: string;
    };
    created_date?: Date;
    abbreviation?: string;
    weight?: number;
}>;
