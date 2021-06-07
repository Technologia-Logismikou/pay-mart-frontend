export interface ShippingZone {
    id: string;
    name: string;
    counties: string[];
    rate: number;
    createdAt: string;
    updatedAt: string;
}

export interface ShippingZoneDto {
    name: string;
    counties: string[];
    rate: number;
}
