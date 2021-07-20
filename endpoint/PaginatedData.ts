/* Paginated data is 1 indexed (1-100 for example instead of 0-99) */
export interface PaginatedData<T> {
    data: T;
    
    current_page: number;
    prev_page: number;
    last_page: number;

    per_page: number;

    from: number;
    to: number;
    total: number;
}