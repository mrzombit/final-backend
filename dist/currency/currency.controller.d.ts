import { CurrencyService } from './currency.service';
import { CreateCurrencyDTO } from './dto/create-currency.dto';
export declare class CurrencyController {
    private currencyService;
    constructor(currencyService: CurrencyService);
    addCurrency(res: any, createCurrencyDTO: CreateCurrencyDTO): Promise<any>;
    getCurrency(res: any, currencyID: any): Promise<any>;
    getCurrencys(res: any): Promise<any>;
    editCurrency(res: any, currencyID: any, createCurrencyDTO: CreateCurrencyDTO): Promise<any>;
    deleteCurrency(res: any, currencyID: any): Promise<any>;
}
