import {
    Permission,
} from "../../model";


export const URL = () => '/auth/user-permissions';
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request { }

export interface Response {
    name: string;
    is_valid_user: boolean;
    subscription_is_trial: boolean;
    subscription_valid: boolean;
    permissions: Permission[];
}