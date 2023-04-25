import { AuthService } from 'src/auth/auth.service';
export declare const editFileName: (req: any, file: any, callback: any) => void;
export declare const imageFileFilter: (req: any, file: any, callback: any) => any;
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
    uploadMultipleFiles(files: any): Promise<any[]>;
    seeUploadedFile(image: any, res: any): any;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
