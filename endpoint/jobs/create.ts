import {
    Job,
} from "../../model";

export const URL = () => `/jobs/update/0`;
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request {
    /* If set to undefined / not set this field will not be set */
    name?: string;
    
    /* If set to undefined / not set this field will not be set */
    description?: string;

    /* If set to undefined / not set this field will not be set */
    technician_user_id?: number;
}

export interface Response {
    message: string | 'ok';
    job: {
        id: number;
    };
}