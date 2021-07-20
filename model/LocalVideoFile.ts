export interface LocalVideoFile {
    id: number;
    company_id: number;

    call_id: number;
    call_log_id: number;

    job_id: number;
    user_id: number;
    
    file_name: string;
    file_path: string;
    local_file_path: string;
    mime_type: string;

    length_seconds: number;

    created_at: string;
    updated_at: string;
    recorded_datetime: string;
}