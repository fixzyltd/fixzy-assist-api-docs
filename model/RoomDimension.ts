import { RoomDimensionImage } from "./RoomDimensionImage";

export interface RoomDimension {
    id: number;
    company_id: number;

    call_id: number;
    call_log_id: number;

    job_id: number;
    user_id: number;

    uuid: string;
    name: string;

    json_room_definition: string;
    image_folder_path: string;
    room_dimension_images: RoomDimensionImage[];

    created_at: string;
    updated_at: string;
}