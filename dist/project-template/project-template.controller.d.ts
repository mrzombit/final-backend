import { CreateProjectTemplateDTO } from './dto/create-project-template.dto';
import { ProjectTemplateService } from './project-template.service';
export declare class ProjectTemplateController {
    private projectTemplateService;
    constructor(projectTemplateService: ProjectTemplateService);
    addProjectTemplate(res: any, createProjectTemplateDTO: CreateProjectTemplateDTO): Promise<any>;
    getProjectTemplate(res: any, projectTemplateID: any): Promise<any>;
    getProjectTemplatesByUserID(res: any, userID: any): Promise<any>;
    getProjectTemplates(res: any): Promise<any>;
    editProjectTemplate(res: any, projectTemplateID: any, createProjectTemplateDTO: CreateProjectTemplateDTO): Promise<any>;
    deleteProjectTemplate(res: any, projectTemplateID: any): Promise<any>;
}
