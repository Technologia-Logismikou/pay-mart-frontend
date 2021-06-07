export interface ProductDto {
    name: string;
    category: string;
    description: string;
    price: number;
    photos: string[];
    public: boolean;
    url: string;
    slug: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    photos: string[];
    public: boolean;
    url: string;
    slug: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}
