import { LocalVideoFile } from "./LocalVideoFile";
import { RoomDimensionImage } from "./RoomDimensionImage";

export interface CallLog {
    id: number;
    uuid: string;
    call_id: number;
    job_id: number;
    technician_user_id: number;

    is_taken: 1 | 0;

    rating: number | null;

    created_at: string;
    updated_at: string;
    last_contact_at: string;
}

export interface CallBasic {
    id: number;
    uuid: string;
    company_id: number;
    created_by_user_id: number;
    job_id: number;
    segmentation_id: number;
    technician_user_id: number;

    last_rating: number | null;

    customer_name: string;
    description: string;
    email_address: string;
    telephone_number: string;
    room_code: string;


    call_logs: CallLog[];
    room_dimension_images: RoomDimensionImage[];

    sending_at: string;
    created_at: string;
    updated_at: string;
}

export interface Call extends CallBasic {
    local_video_files: LocalVideoFile[];
}