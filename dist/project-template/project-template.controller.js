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
exports.ProjectTemplateController = void 0;
const validate_object_id_pipes_1 = require("./../user/shared/pipes/validate-object-id.pipes");
const create_project_template_dto_1 = require("./dto/create-project-template.dto");
const project_template_service_1 = require("./project-template.service");
const common_1 = require("@nestjs/common");
let ProjectTemplateController = class ProjectTemplateController {
    constructor(projectTemplateService) {
        this.projectTemplateService = projectTemplateService;
    }
    async addProjectTemplate(res, createProjectTemplateDTO) {
        const newProjectTemplate = await this.projectTemplateService.addProjectTemplate(createProjectTemplateDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'ProjectTemplate has been submitted successfully!',
            projectTemplate: newProjectTemplate,
        });
    }
    async getProjectTemplate(res, projectTemplateID) {
        const projectTemplate = await this.projectTemplateService.getProjectTemplate(projectTemplateID);
        if (!projectTemplate) {
            throw new common_1.NotFoundException('ProjectTemplate does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(projectTemplate);
    }
    async getProjectTemplatesByUserID(res, userID) {
        const projectTemplates = await this.projectTemplateService.getProjectTemplatesByUserID(userID);
        if (!projectTemplates) {
            throw new common_1.NotFoundException('Transaction does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(projectTemplates);
    }
    async getProjectTemplates(res) {
        const projectTemplates = await this.projectTemplateService.getProjectTemplates();
        return res.status(common_1.HttpStatus.OK).json(projectTemplates);
    }
    async editProjectTemplate(res, projectTemplateID, createProjectTemplateDTO) {
        const editedProjectTemplate = await this.projectTemplateService.editProjectTemplate(projectTemplateID, createProjectTemplateDTO);
        if (!editedProjectTemplate) {
            throw new common_1.NotFoundException('ProjectTemplate does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'ProjectTemplate has been successfully updated',
            projectTemplate: editedProjectTemplate,
        });
    }
    async deleteProjectTemplate(res, projectTemplateID) {
        const deletedProjectTemplate = await this.projectTemplateService.deleteProjectTemplate(projectTemplateID);
        if (!deletedProjectTemplate) {
            throw new common_1.NotFoundException('ProjectTemplate does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'ProjectTemplate has been deleted!',
            projectTemplate: deletedProjectTemplate,
        });
    }
};
__decorate([
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_project_template_dto_1.CreateProjectTemplateDTO]),
    __metadata("design:returntype", Promise)
], ProjectTemplateController.prototype, "addProjectTemplate", null);
__decorate([
    (0, common_1.Get)('post/:projectTemplateID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('projectTemplateID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectTemplateController.prototype, "getProjectTemplate", null);
__decorate([
    (0, common_1.Get)('user/:userID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('userID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectTemplateController.prototype, "getProjectTemplatesByUserID", null);
__decorate([
    (0, common_1.Get)('projectTemplates'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectTemplateController.prototype, "getProjectTemplates", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('projectTemplateID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_project_template_dto_1.CreateProjectTemplateDTO]),
    __metadata("design:returntype", Promise)
], ProjectTemplateController.prototype, "editProjectTemplate", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('projectTemplateID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectTemplateController.prototype, "deleteProjectTemplate", null);
ProjectTemplateController = __decorate([
    (0, common_1.Controller)('projectTemplate'),
    __metadata("design:paramtypes", [project_template_service_1.ProjectTemplateService])
], ProjectTemplateController);
exports.ProjectTemplateController = ProjectTemplateController;
//# sourceMappingURL=project-template.controller.js.map