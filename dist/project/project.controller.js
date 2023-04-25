"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const create_project_dto_1 = require("./dto/create-project.dto");
const project_service_1 = require("./project.service");
const common_1 = require("@nestjs/common");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async addProject(res, createProjectDTO) {
        const newProject = await this.projectService.addProject(createProjectDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Project has been submitted successfully!',
            project: newProject,
        });
    }
    async getProject(res, projectID) {
        const project = await this.projectService.getProject(projectID);
        if (!project) {
            throw new common_1.NotFoundException('Project does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(project);
    }
    async getProjectsByUserID(res, userID) {
        const projects = await this.projectService.getProjectsByUserID(userID);
        if (!projects) {
            throw new common_1.NotFoundException('Transaction does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(projects);
    }
    async getProjects(res) {
        const projects = await this.projectService.getProjects();
        return res.status(common_1.HttpStatus.OK).json(projects);
    }
    async editProject(res, projectID, createProjectDTO) {
        const editedProject = await this.projectService.editProject(projectID, createProjectDTO);
        if (!editedProject) {
            throw new common_1.NotFoundException('Project does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Project has been successfully updated',
            project: editedProject,
        });
    }
    async deleteProject(res, projectID) {
        const deletedProject = await this.projectService.deleteProject(projectID);
        if (!deletedProject) {
            throw new common_1.NotFoundException('Project does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Project has been deleted!',
            project: deletedProject,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_project_dto_1.CreateProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "addProject", null);
__decorate([
    (0, common_1.Get)('post/:projectID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('projectID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProject", null);
__decorate([
    (0, common_1.Get)('user/:userID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjectsByUserID", null);
__decorate([
    (0, common_1.Get)('projects'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjects", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('projectID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_project_dto_1.CreateProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "editProject", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('projectID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteProject", null);
ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map