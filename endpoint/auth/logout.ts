
export const URL = () => '/auth/logout';
export const Type = 'POST';
export const Headers = (token: string) => [`Authorization: Bearer ${token}`];

export interface Request { }

export interface Response {
    message: string | 'ok';
}