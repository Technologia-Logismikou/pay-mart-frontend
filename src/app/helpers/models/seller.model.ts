export interface Seller {
    email: string;
    password: string;
    phone: string;
    token: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateSellerDto {
    email: string;
    password: string;
    phone: string;
    store: {
        name: string;
        address: string;
        phone: string;
        email: string;
        logo: string;
        subdomain: string;
        website: string;
    };
    bankAccount: {
        iban: string;
        name: string;
        beneficiary: string;
    };
}
