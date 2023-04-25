"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTemplateModule = void 0;
const project_template_schema_1 = require("./schemas/project-template.schema");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const project_template_controller_1 = require("./project-template.controller");
const project_template_service_1 = require("./project-template.service");
let ProjectTemplateModule = class ProjectTemplateModule {
};
ProjectTemplateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'ProjectTemplate', schema: project_template_schema_1.ProjectTemplateSchema }]),
        ],
        controllers: [project_template_controller_1.ProjectTemplateController],
        providers: [project_template_service_1.ProjectTemplateService]
    })
], ProjectTemplateModule);
exports.ProjectTemplateModule = ProjectTemplateModule;
//# sourceMappingURL=project-template.module.js.map