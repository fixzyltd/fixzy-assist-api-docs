import {
    JobBasic,
} from "../../model";

import { PaginatedData } from '../PaginatedData';

export const URL = () => '/job/create-note';
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request {
    /* Pass to limit results to results created by a specific user */
    created_by_user_id?: number;

    /* If set to true, only results with room dimensions will be returned */
    has_room_dimensions?: boolean;

    /* Minimum value of 1 */
    page: number;

    /* Text to search for */
    search?: string;
}

export interface Response {
    message: string | 'ok';
    jobs: PaginatedData<JobBasic>;
}