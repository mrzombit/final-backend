import * as mongoose from 'mongoose';
export declare const BusinessGoalSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: {
        th?: string;
        en?: string;
    };
    created_date?: Date;
    full_name?: string;
    detail?: any;
}>;
