import { CreateSubscriptionPlanDTO } from './dto/create-subscription-plan.dto';
import { SubscriptionPlanService } from './subscription-plan.service';
export declare class SubscriptionPlanController {
    private subscriptionPlanService;
    constructor(subscriptionPlanService: SubscriptionPlanService);
    addSubscriptionPlan(res: any, createSubscriptionPlanDTO: CreateSubscriptionPlanDTO): Promise<any>;
    getSubscriptionPlan(res: any, subscriptionPlanID: any): Promise<any>;
    getSubscriptionPlans(res: any): Promise<any>;
    editSubscriptionPlan(res: any, subscriptionPlanID: any, createSubscriptionPlanDTO: CreateSubscriptionPlanDTO): Promise<any>;
    deleteSubscriptionPlan(res: any, subscriptionPlanID: any): Promise<any>;
}
