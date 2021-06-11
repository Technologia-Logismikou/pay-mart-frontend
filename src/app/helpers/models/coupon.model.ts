export interface CouponDto {
    name: string;
    description: string;
    amountOff: number;
    percentOff: number;
    maxRedemptions: number;
    expiration: string;
    active: boolean;
}

export interface Coupon {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    amountOff: number;
    percentOff: number;
    timesRedeemed: number;
    maxRedemptions: number;
    expiration: string;
    active: boolean;
}
