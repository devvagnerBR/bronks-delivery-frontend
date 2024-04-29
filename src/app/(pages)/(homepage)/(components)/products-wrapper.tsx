import { ProductInterface } from "@/types/products";
import Product from "./product";
import React, { Suspense } from "react";
import Wrapper from "@/components/wrapper";
import SelectSize from "./select-size";

interface ProductsWrapperProps {
    products: ProductInterface[];
    children?: React.ReactNode;
}

export default async function ProductsWrapper( { products }: ProductsWrapperProps ) {


    return (
        <Suspense>
            <Wrapper>
                <div className="mt-16 flex flex-col gap-4" id="menu">
                    <div className="flex items-center justify-between">
                        <h1 className="text-5xl font-bold max-sm:text-3xl max-sm:text-center">Quentinhas<span className="text-roxo">.</span></h1>
                        <SelectSize />
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
                        {products.map( ( product: ProductInterface ) => <Product key={product.id} product={product} /> )}
                    </div>
                </div>
            </Wrapper>
        </Suspense>
    );
}