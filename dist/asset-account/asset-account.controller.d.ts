import { AssetAccountService } from './asset-account.service';
import { CreateAssetAccountDTO } from './dto/create-asset-account.dto';
export declare class AssetAccountController {
    private assetAccountService;
    constructor(assetAccountService: AssetAccountService);
    addAssetAccount(res: any, createAssetAccountDTO: CreateAssetAccountDTO): Promise<any>;
    getAssetAccount(res: any, assetAccountID: any): Promise<any>;
    getAssetAccounts(res: any): Promise<any>;
    editAssetAccount(res: any, assetAccountID: any, createAssetAccountDTO: CreateAssetAccountDTO): Promise<any>;
    deleteAssetAccount(res: any, assetAccountID: any): Promise<any>;
}
