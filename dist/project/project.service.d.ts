import { Project } from './interfaces/project.interface';
import { CreateProjectDTO } from './dto/create-project.dto';
import { Model } from 'mongoose';
export declare class ProjectService {
    private readonly projectModel;
    constructor(projectModel: Model<Project>);
    addProject(createProjectDTO: CreateProjectDTO): Promise<Project>;
    getProject(projectID: any): Promise<Project>;
    getProjectsByUserID(userID: any): Promise<Project[]>;
    getProjects(): Promise<Project[]>;
    editProject(projectID: any, createProjectDTO: CreateProjectDTO): Promise<Project>;
    deleteProject(projectID: any): Promise<any>;
}
