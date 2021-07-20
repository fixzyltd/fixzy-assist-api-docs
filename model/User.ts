import { Company } from "./Company";
import { Permission } from "./Permission";

export interface UserRolePivot {
    model_id: number;
    model_type: string;
    role_id: number;
}

export interface UserRole {
    id: number;
    name: string;
    guard_name: string;
    created_at: string;
    updated_at: string;
    permissions: Permission[];
    pivot: UserRolePivot;
}

export interface User {
    id: number;

    is_active: 0 | 1;
    recieve_news: 0 | 1;
    
    name: string;
    telephone: string;
    email: string;
    email_verified_at: string;

    company_id: number;
    created_at: string;
    updated_at: string;

    deleted_at: string;
    deleted_by_user_id: number;
    disabled_at: string;

    roles: UserRole[];
    company?: Company;
}