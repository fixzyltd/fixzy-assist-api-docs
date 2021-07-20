import {
    User,
} from "../../model";

import { PaginatedData } from '../PaginatedData';

export const URL = () => '/users';
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request {
    /* Minimum value of 1 */
    page: number;

    /* Text to search for */
    search?: string;
}

export interface Response {
    message: string | 'ok';
    user: PaginatedData<User>;
}