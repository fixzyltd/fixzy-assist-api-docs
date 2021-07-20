import { CallBasic } from "./Call";
import { LocalVideoFile } from "./LocalVideoFile";
import { RoomDimension } from "./RoomDimension";
import { RoomDimensionImage } from "./RoomDimensionImage";

export interface JobBasic {
    id: number;
    company_id: number;
    user_id: number;

    name: string;
    description: string;

    created_at: string;
    updated_at: string;
}

export interface Job extends JobBasic {
    calls: CallBasic[];
    room_dimensions: RoomDimension[];
    room_dimension_images: RoomDimensionImage[];
    local_video_files: LocalVideoFile[];
}