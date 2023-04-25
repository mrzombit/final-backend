import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    username: string;
    email: string;
    password: string;
    payment_cards: {
        name?: string;
        is_primary?: boolean;
        code?: string;
        expired_date?: string;
        cvv?: string;
    }[];
    project_ids: string[];
    transaction_ids: string[];
    name?: string;
    surname?: string;
    phone_number?: string;
    subscription_plan_id?: string;
    is_cooperation?: boolean;
}>;
