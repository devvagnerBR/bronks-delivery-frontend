import { ProductInterface } from "@/types/products";
import Image from "next/image";

import { Basket } from "@phosphor-icons/react/dist/ssr";



interface ProductProps {
    product: ProductInterface;
}

export default async function Product( { product }: ProductProps ) {

    return (
        <div className="rounded-lg group shadow-sm border hover:border-roxo/30 transition-all bg-neutral-50 flex flex-col items-center justify-start min-w-[230px] w-[308px] h-[408px] max-xms:min-w-0 max-xms:w-full py-4">
            <Image
                src="/quentinha.png"
                width={600}
                height={257}
                sizes=""
                alt="quentinha"
                quality={100}
                priority
                className="group group-hover:scale-[102%] transition-all duration-500" />
            <h1 className="text-xl font-bold uppercase text-neutral-700 mt-2">{product.name}</h1>
            {/* <p className="text-sm">{product.price}</p> */}
            <p className="text-sm text-center text-neutral-500 mt-2">{product.description}</p>

            <div className="flex flex-col mt-3 gap-4 items-center px-4 justify-center w-full">

                <p className="text-sm text-neutral-500 font-light">R$<span className="font-bold text-5xl">{product.price}</span></p>


                <div className="flex group group-hover:scale-[101%] gap-4 w-full items-center justify-center bg-roxo p-4 rounded-lg  cursor-pointer hover:bg-roxo/80 transition-all border-2 border-transparent hover:border-roxo/80 duration-500">
                    <p className="text-sm text-white font-semibold">ADICIONAR A SACOLA</p>
                    <Basket weight="fill" className="fill-white" size={22} />
                </div>
            </div>
        </div>
    );
}