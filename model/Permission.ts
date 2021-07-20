export interface PermissionPivot {
    permission_id: number;
    role_id: number;
}

export interface Permission {
    id: number;
    name: string;
    guard_namee: string;
    created_at: string;
    updated_at: string;
    pivot: PermissionPivot;
}
