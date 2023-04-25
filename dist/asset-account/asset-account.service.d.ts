import { CreateAssetAccountDTO } from './dto/create-asset-account.dto';
import { AssetAccount } from './interfaces/asset-account.interface';
import { Model } from 'mongoose';
export declare class AssetAccountService {
    private readonly assetAccountModel;
    constructor(assetAccountModel: Model<AssetAccount>);
    addAssetAccount(createAssetAccountDTO: CreateAssetAccountDTO): Promise<AssetAccount>;
    getAssetAccount(assetAccountID: any): Promise<AssetAccount>;
    getAssetAccounts(): Promise<AssetAccount[]>;
    editAssetAccount(assetAccountID: any, createAssetAccountDTO: CreateAssetAccountDTO): Promise<AssetAccount>;
    deleteAssetAccount(assetAccountID: any): Promise<any>;
}
