import { getProducts } from "@/actions/get-products";
import Hero from "@/components/homepage/hero";
import ProductsWrapper from "@/components/homepage/products-wrapper";
import { Suspense } from "react";



interface HomeProps {
    searchParams: { tamanho: 'p' | 'm' | 'g' }
}

export default async function Home( { searchParams }: HomeProps ) {

    const products = await getProducts();

    return (

        <div className="w-full mt-32 max-md:mt-8">
            <Hero />
            <Suspense>
                <ProductsWrapper products={products} />
            </Suspense>
        </ div>

    );
}
