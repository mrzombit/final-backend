import * as mongoose from 'mongoose';
export declare const TransactionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    subscription_plan_id?: string;
    created_date?: Date;
    user_id?: string;
    amount?: number;
    payment_method?: string;
}>;
