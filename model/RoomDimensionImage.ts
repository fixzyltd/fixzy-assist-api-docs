export interface RoomDimensionImage {
    id: number;
    company_id: number;

    call_id: number;
    call_log_id: number;

    job_id: number;
    user_id: number;
    room_dimension_id: number;

    uuid: string;
    
    basename: string;
    filename: string;
    path: string;
    folder_location: string;
    mime_type: string;

    created_at: string;
    updated_at: string;
}