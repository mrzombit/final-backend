import { PeriodService } from './period.service';
import { CreatePeriodDTO } from './dto/create-period.dto';
export declare class PeriodController {
    private periodService;
    constructor(periodService: PeriodService);
    addPeriod(res: any, createPeriodDTO: CreatePeriodDTO): Promise<any>;
    getPeriod(res: any, periodID: any): Promise<any>;
    getPeriods(res: any): Promise<any>;
    editPeriod(res: any, periodID: any, createPeriodDTO: CreatePeriodDTO): Promise<any>;
    deletePeriod(res: any, periodID: any): Promise<any>;
}
