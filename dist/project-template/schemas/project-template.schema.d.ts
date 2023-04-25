import * as mongoose from 'mongoose';
export declare const ProjectTemplateSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    mainCategory?: string;
    selectedCounted?: number;
    projectData?: {
        industry_ids: string[];
        sale_trends: {
            description?: string;
            year?: number;
            trend?: number;
        }[];
        business_goals: mongoose.Types.DocumentArray<any> | any[];
        name?: string;
        description?: string;
        logo_url?: string;
        created_date?: Date;
        modified_date?: Date;
        ffcReason?: string;
        model_config?: {
            projection_period?: number;
            start_date?: Date;
            currency_id?: string;
            working_hours?: number;
            income_tax_rate?: number;
            discounting_rate?: number;
        };
        revenue?: {
            service_tables: {
                services: {
                    seasonal_trends: number[];
                    name?: string;
                    start_date?: Date;
                    unit?: number;
                    unit_name?: string;
                    serve_per_unit?: number;
                    revenue_per_service?: number;
                    cost_per_service?: number;
                    price_increase?: number;
                    price_increase_period_id?: string;
                    cost_increase?: number;
                    cost_increase_period_id?: string;
                }[];
                name?: string;
                description?: string;
                color?: string;
                text_color?: string;
            }[];
            product_tables: {
                products: {
                    seasonal_trends: number[];
                    name?: string;
                    start_date?: Date;
                    price_increase?: number;
                    price_increase_period_id?: string;
                    cost_increase?: number;
                    cost_increase_period_id?: string;
                    revenue_per_unit?: number;
                    cost_per_unit?: number;
                    days_of_inventory?: {
                        days?: number;
                        months?: number;
                    };
                }[];
                name?: string;
                description?: string;
                color?: string;
                text_color?: string;
            }[];
        };
        expense?: {
            investment_tables: {
                investments: {
                    name?: string;
                    start_date?: Date;
                    amount?: number;
                    account_id?: string;
                    is_initial?: boolean;
                }[];
                name?: string;
                description?: string;
                color?: string;
                text_color?: string;
            }[];
            fixed_cost_tables: {
                fixed_costs: {
                    number: mongoose.Types.DocumentArray<any> | any[];
                    name?: string;
                    start_date?: Date;
                    unit?: number;
                    cost_increase?: number;
                    cost_increase_period_id?: string;
                    amount?: number;
                    period_id?: string;
                }[];
                name?: string;
                description?: string;
                color?: string;
                text_color?: string;
            }[];
        };
        miscellaneous?: {
            equity_contribution: {
                date?: Date;
                name?: string;
                amount?: number;
                repayment?: {
                    start_date?: Date;
                    period_id?: string;
                };
            }[];
            debt_issuance: {
                payments: {
                    year?: number;
                    amount?: number;
                }[];
                name?: string;
                start_date?: Date;
                amount?: number;
                period_id?: string;
                apr?: number;
            }[];
        };
    };
}>;
