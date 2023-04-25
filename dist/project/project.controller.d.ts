import { CreateProjectDTO } from './dto/create-project.dto';
import { ProjectService } from './project.service';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    addProject(res: any, createProjectDTO: CreateProjectDTO): Promise<any>;
    getProject(res: any, projectID: any): Promise<any>;
    getProjectsByUserID(res: any, userID: any): Promise<any>;
    getProjects(res: any): Promise<any>;
    editProject(res: any, projectID: any, createProjectDTO: CreateProjectDTO): Promise<any>;
    deleteProject(res: any, projectID: any): Promise<any>;
}
