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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProjectService = class ProjectService {
    constructor(projectModel) {
        this.projectModel = projectModel;
    }
    async addProject(createProjectDTO) {
        const newProject = await new this.projectModel(createProjectDTO);
        return newProject.save();
    }
    async getProject(projectID) {
        const project = await this.projectModel
            .findById(projectID)
            .exec();
        return project;
    }
    async getProjectsByUserID(userID) {
        const projects = await this.projectModel
            .find({ "user_id": userID })
            .exec();
        return projects;
    }
    async getProjects() {
        const projects = await this.projectModel.find().exec();
        return projects;
    }
    async editProject(projectID, createProjectDTO) {
        const editedProject = await this.projectModel
            .findByIdAndUpdate(projectID, createProjectDTO, { new: true });
        return editedProject;
    }
    async deleteProject(projectID) {
        const deletedProject = await this.projectModel
            .findByIdAndRemove(projectID);
        return deletedProject;
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Project')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map