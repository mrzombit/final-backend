import { CreatePeriodDTO } from './dto/create-period.dto';
import { Period } from './interfaces/period.interface';
import { Model } from 'mongoose';
export declare class PeriodService {
    private readonly periodModel;
    constructor(periodModel: Model<Period>);
    addPeriod(createPeriodDTO: CreatePeriodDTO): Promise<Period>;
    getPeriod(periodID: any): Promise<Period>;
    getPeriods(): Promise<Period[]>;
    editPeriod(periodID: any, createPeriodDTO: CreatePeriodDTO): Promise<Period>;
    deletePeriod(periodID: any): Promise<any>;
}
