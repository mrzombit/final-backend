import { Transaction } from './interfaces/transaction.interface';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { Model } from 'mongoose';
export declare class TransactionService {
    private readonly transactionModel;
    constructor(transactionModel: Model<Transaction>);
    addTransaction(createTransactionDTO: CreateTransactionDTO): Promise<Transaction>;
    getTransaction(transactionID: any): Promise<Transaction>;
    getTransactionsByUserID(userID: any): Promise<Transaction[]>;
    getTransactions(): Promise<Transaction[]>;
    editTransaction(transactionID: any, createTransactionDTO: CreateTransactionDTO): Promise<Transaction>;
    deleteTransaction(transactionID: any): Promise<any>;
}
