import * as mongoose from 'mongoose';
export declare const TransactionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    created_date?: Date;
    amount?: number;
    user_id?: string;
    subscription_plan_id?: string;
    payment_method?: string;
}>;
