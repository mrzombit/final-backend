import * as mongoose from 'mongoose';
export declare const SubscriptionPlanSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: {
        th?: string;
        en?: string;
    };
    created_date?: Date;
    price?: number;
    is_actived?: boolean;
    properties?: {
        is_ffc?: boolean;
        is_sensitivity?: boolean;
        is_export?: boolean;
        is_compared?: boolean;
    };
}>;
