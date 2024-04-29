
export interface ProductInterface {
    id: string;
    name: string;
    slug: string;
    price: number;
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
