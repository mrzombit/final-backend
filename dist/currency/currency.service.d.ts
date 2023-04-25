import { CreateCurrencyDTO } from './dto/create-currency.dto';
import { Currency } from './interfaces/currency.interface';
import { Model } from 'mongoose';
export declare class CurrencyService {
    private readonly currencyModel;
    constructor(currencyModel: Model<Currency>);
    addCurrency(createCurrencyDTO: CreateCurrencyDTO): Promise<Currency>;
    getCurrency(currencyID: any): Promise<Currency>;
    getCurrencys(): Promise<Currency[]>;
    editCurrency(currencyID: any, createCurrencyDTO: CreateCurrencyDTO): Promise<Currency>;
    deleteCurrency(currencyID: any): Promise<any>;
}
