import * as mongoose from 'mongoose';
export declare const PeriodSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: {
        th?: string;
        en?: string;
    };
    created_date?: Date;
    days?: number;
    months?: number;
}>;
