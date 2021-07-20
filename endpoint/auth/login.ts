import {
    User,
    Permission,
} from "../../model";

export const URL = () => '/auth/login';
export const Type = 'POST';
export const Headers = () => [];

export interface Request {
    email: string;
    password: string;
}

export interface Response {
    /*
        Token which will be used in all future requests with the API
        Store this token and keep it secure.
    */
    token: string;
    subscription_valid: boolean;
    subscription_is_trial: boolean;

    permissions: Permission[];
    user: User;
}