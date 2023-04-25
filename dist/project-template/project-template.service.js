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
exports.ProjectTemplateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProjectTemplateService = class ProjectTemplateService {
    constructor(projectTemplateModel) {
        this.projectTemplateModel = projectTemplateModel;
    }
    async addProjectTemplate(createProjectTemplateDTO) {
        const newProjectTemplate = await new this.projectTemplateModel(createProjectTemplateDTO);
        return newProjectTemplate.save();
    }
    async getProjectTemplate(projectTemplateID) {
        const projectTemplate = await this.projectTemplateModel
            .findById(projectTemplateID)
            .exec();
        return projectTemplate;
    }
    async getProjectTemplatesByUserID(userID) {
        const projectTemplates = await this.projectTemplateModel
            .find({ "user_id": userID })
            .exec();
        return projectTemplates;
    }
    async getProjectTemplates() {
        const projectTemplates = await this.projectTemplateModel.find().exec();
        return projectTemplates;
    }
    async editProjectTemplate(projectTemplateID, createProjectTemplateDTO) {
        const editedProjectTemplate = await this.projectTemplateModel
            .findByIdAndUpdate(projectTemplateID, createProjectTemplateDTO, { new: true });
        return editedProjectTemplate;
    }
    async deleteProjectTemplate(projectTemplateID) {
        const deletedProjectTemplate = await this.projectTemplateModel
            .findByIdAndRemove(projectTemplateID);
        return deletedProjectTemplate;
    }
};
ProjectTemplateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('ProjectTemplate')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProjectTemplateService);
exports.ProjectTemplateService = ProjectTemplateService;
//# sourceMappingURL=project-template.service.js.map