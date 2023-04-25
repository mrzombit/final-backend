import { SubscriptionPlan } from './interfaces/subscription-plan.interface';
import { CreateSubscriptionPlanDTO } from './dto/create-subscription-plan.dto';
import { Model } from 'mongoose';
export declare class SubscriptionPlanService {
    private readonly subscriptionPlanModel;
    constructor(subscriptionPlanModel: Model<SubscriptionPlan>);
    addSubscriptionPlan(createSubscriptionPlanDTO: CreateSubscriptionPlanDTO): Promise<SubscriptionPlan>;
    getSubscriptionPlan(subscriptionPlanID: any): Promise<SubscriptionPlan>;
    getSubscriptionPlans(): Promise<SubscriptionPlan[]>;
    editSubscriptionPlan(subscriptionPlanID: any, createSubscriptionPlanDTO: CreateSubscriptionPlanDTO): Promise<SubscriptionPlan>;
    deleteSubscriptionPlan(subscriptionPlanID: any): Promise<any>;
}
