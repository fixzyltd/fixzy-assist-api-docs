import {
    Job,
} from "../../model";

export const URL = (id: number) => `/jobs/update/${id}`;
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request {
    /* If set to undefined / not set this field will not be changed */
    name?: string;
    
    /* If set to undefined / not set this field will not be changed */
    description?: string;

    /* If set to undefined / not set this field will not be changed */
    technician_user_id?: number;
}

export interface Response {
    message: string | 'ok';
}