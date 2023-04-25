import { IndustryService } from './industry.service';
import { CreateIndustryDTO } from './dto/create-industry.dto';
export declare class IndustryController {
    private industryService;
    constructor(industryService: IndustryService);
    addIndustry(res: any, createIndustryDTO: CreateIndustryDTO): Promise<any>;
    getIndustry(res: any, industryID: any): Promise<any>;
    getIndustrys(res: any): Promise<any>;
    editIndustry(res: any, industryID: any, createIndustryDTO: CreateIndustryDTO): Promise<any>;
    deleteIndustry(res: any, industryID: any): Promise<any>;
}
