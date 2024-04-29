import { getProducts } from "@/actions/get-products";
import Hero from "./(components)/hero";
import ProductsWrapper from "./(components)/products-wrapper";
import { Suspense } from "react";



interface HomeProps {
  searchParams: { tamanho: 'p' | 'm' | 'g' }
}

export default async function Home( { searchParams }: HomeProps ) {

  const products = await getProducts();

  const productsWithSize = products.map( ( product ) => {
    let newProduct = { ...product }

    switch ( searchParams.tamanho ) {
      case 'p':
        newProduct.price = 10 - 4;
        break;
      case 'm':
        newProduct.price = 10 - 2;
        break;
      case 'g':
        newProduct.price = 10;
      default:
        break;
    }

    return newProduct;
  } )

  return (

    <div className="w-full mt-32 max-md:mt-16">
      <Hero />
      <Suspense>
        <ProductsWrapper products={productsWithSize} />
      </Suspense>
    </ div>

  );
}
