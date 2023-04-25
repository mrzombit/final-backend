import { ProjectTemplate } from './interfaces/project-template.interface';
import { CreateProjectTemplateDTO } from './dto/create-project-template.dto';
import { Model } from 'mongoose';
export declare class ProjectTemplateService {
    private readonly projectTemplateModel;
    constructor(projectTemplateModel: Model<ProjectTemplate>);
    addProjectTemplate(createProjectTemplateDTO: CreateProjectTemplateDTO): Promise<ProjectTemplate>;
    getProjectTemplate(projectTemplateID: any): Promise<ProjectTemplate>;
    getProjectTemplatesByUserID(userID: any): Promise<ProjectTemplate[]>;
    getProjectTemplates(): Promise<ProjectTemplate[]>;
    editProjectTemplate(projectTemplateID: any, createProjectTemplateDTO: CreateProjectTemplateDTO): Promise<ProjectTemplate>;
    deleteProjectTemplate(projectTemplateID: any): Promise<any>;
}
