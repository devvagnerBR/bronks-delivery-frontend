
export interface ProductInterface {
    id: string;
    name: string;
    slug: string;
    priceP: number;
    priceM: number;
    priceG: number;
    description: string;
    category: string;
    image: string;
    isAvailable: boolean;
    createdAt: string;
}

export interface ProductInterfaceWithQuantity extends ProductInterface {
    quantity: number;
    size?: string
}


export interface ProductToDomain {
    id: string;
    name: string;
    price: Price;
    description: string;
    category: string;
    image: string;
    isAvailable: boolean;
    createdAt: string;
    slug: string;
}

interface Price {
    p: { price: string; size: string; };
    m: { price: string; size: string; };
    g: { price: string; size: string; };
    [key: string]: { price: string; size: string; };
}

export interface ProductToCart {
    category: string;
    createdAt: string;
    description: string;
    id: string;
    image: string;
    isAvailable: boolean;
    name: string;
    price: { price: number, size: 'p' | 'm' | 'g' }
    slug: string;
}