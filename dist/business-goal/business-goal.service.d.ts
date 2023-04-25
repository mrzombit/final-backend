import { CreateBusinessGoalDTO } from './dto/create-business-goal.dto';
import { BusinessGoal } from './interfaces/business-goal.interface';
import { Model } from 'mongoose';
export declare class BusinessGoalService {
    private readonly businessGoalModel;
    constructor(businessGoalModel: Model<BusinessGoal>);
    addBusinessGoal(createBusinessGoalDTO: CreateBusinessGoalDTO): Promise<BusinessGoal>;
    getBusinessGoal(businessGoalID: any): Promise<BusinessGoal>;
    getBusinessGoals(): Promise<BusinessGoal[]>;
    editBusinessGoal(businessGoalID: any, createBusinessGoalDTO: CreateBusinessGoalDTO): Promise<BusinessGoal>;
    deleteBusinessGoal(businessGoalID: any): Promise<any>;
}
