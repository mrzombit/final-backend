"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const app_properties_1 = require("./app.properties");
const asset_account_module_1 = require("./asset-account/asset-account.module");
const currency_module_1 = require("./currency/currency.module");
const industry_module_1 = require("./industry/industry.module");
const period_module_1 = require("./period/period.module");
const project_module_1 = require("./project/project.module");
const transaction_module_1 = require("./transaction/transaction.module");
const user_module_1 = require("./user/user.module");
const subscription_plan_module_1 = require("./subscription-plan/subscription-plan.module");
const auth_module_1 = require("./auth/auth.module");
const business_goal_module_1 = require("./business-goal/business-goal.module");
const platform_express_1 = require("@nestjs/platform-express");
const project_template_module_1 = require("./project-template/project-template.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './files',
            }),
            mongoose_1.MongooseModule.forRoot(app_properties_1.MONGODB_CONNECTION, {
                useNewUrlParser: true,
            }),
            asset_account_module_1.AssetAccountModule,
            currency_module_1.CurrencyModule,
            industry_module_1.IndustryModule,
            period_module_1.PeriodModule,
            project_module_1.ProjectModule,
            subscription_plan_module_1.SubscriptionPlanModule,
            transaction_module_1.TransactionModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            business_goal_module_1.BusinessGoalModule,
            project_template_module_1.ProjectTemplateModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map