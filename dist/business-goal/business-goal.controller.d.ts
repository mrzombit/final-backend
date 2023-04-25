import { BusinessGoalService } from './business-goal.service';
import { CreateBusinessGoalDTO } from './dto/create-business-goal.dto';
export declare class BusinessGoalController {
    private businessGoalService;
    constructor(businessGoalService: BusinessGoalService);
    addBusinessGoal(res: any, createBusinessGoalDTO: CreateBusinessGoalDTO): Promise<any>;
    getBusinessGoal(res: any, businessGoalID: any): Promise<any>;
    getBusinessGoals(res: any): Promise<any>;
    editBusinessGoal(res: any, businessGoalID: any, createBusinessGoalDTO: CreateBusinessGoalDTO): Promise<any>;
    deleteBusinessGoal(res: any, businessGoalID: any): Promise<any>;
}
