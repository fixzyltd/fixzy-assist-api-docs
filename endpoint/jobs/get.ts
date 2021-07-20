import {
    Job,
} from "../../model";

export const URL = (id: number) => `/jobs/view/${id}`;
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request { }

export interface Response {
    message: string | 'ok';
    job: Job;
}