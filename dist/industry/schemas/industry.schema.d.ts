import * as mongoose from 'mongoose';
export declare const IndustrySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: {
        th?: string;
        en?: string;
    };
    created_date?: Date;
    is_b2b?: boolean;
    is_b2c?: boolean;
    category?: {
        th?: string;
        en?: string;
    };
}>;
