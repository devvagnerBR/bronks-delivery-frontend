import Wrapper from "@/components/common/wrapper";
import { ProductToDomain } from "@/types/products";
import React from "react";
import SelectSize from "./select-size";
import Product from "./product";
import CartButton from "./cart-button";


interface ProductsWrapperProps {
    products: ProductToDomain[];
    children?: React.ReactNode;
}

export default async function ProductsWrapper( { products }: ProductsWrapperProps ) {

    return (
        <Wrapper>
            <div className="mt-16 flex flex-col gap-4 w-full" id="menu">
                <div className="flex items-center justify-between">
                    <h1 className="text-5xl font-bold max-sm:text-3xl max-sm:text-center">
                        Quentinhas<span className="text-roxo">.</span>
                    </h1>
                    <SelectSize />
                </div>
                <div className="flex overflow-x-hidden items-center justify-center gap-4 flex-wrap mt-8">
                    {products.map( ( product: ProductToDomain ) => <Product key={product.id} product={product} /> )}
                </div>
                <CartButton />
            </div>
        </Wrapper>
    );
}