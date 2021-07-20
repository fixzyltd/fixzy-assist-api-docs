import {
    JobBasic,
} from "../../model";

export const URL = () => '/job/create-note';
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request {
    job_id: number;
    
    /* Title of the note */
    name: string;

    /* Description of the note */
    note: string;
}

export interface Response {
    message: string | 'ok';
}