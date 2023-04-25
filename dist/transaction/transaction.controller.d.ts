import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    addTransaction(res: any, createTransactionDTO: CreateTransactionDTO): Promise<any>;
    getTransaction(res: any, transactionID: any): Promise<any>;
    getTransactionsByUserID(res: any, userID: any): Promise<any>;
    getTransactions(res: any): Promise<any>;
    editTransaction(res: any, transactionID: any, createTransactionDTO: CreateTransactionDTO): Promise<any>;
    deleteTransaction(res: any, transactionID: any): Promise<any>;
}
