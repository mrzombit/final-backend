import { CreateIndustryDTO } from './dto/create-industry.dto';
import { Industry } from './interfaces/industry.interface';
import { Model } from 'mongoose';
export declare class IndustryService {
    private readonly industryModel;
    constructor(industryModel: Model<Industry>);
    addIndustry(createIndustryDTO: CreateIndustryDTO): Promise<Industry>;
    getIndustry(industryID: any): Promise<Industry>;
    getIndustrys(): Promise<Industry[]>;
    editIndustry(industryID: any, createIndustryDTO: CreateIndustryDTO): Promise<Industry>;
    deleteIndustry(industryID: any): Promise<any>;
}
