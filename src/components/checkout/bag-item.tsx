'use client'


import { useBag } from "@/context/bag-context";
import { useCheckoutZod } from "@/hooks/use-checkout-zod";
import { ProductToCart } from "@/types/products";
import { Trash } from "@phosphor-icons/react/dist/ssr";

import Image from 'next/image';



export interface ItemProps {

    item: ProductToCart
    index: number
}

export default function BagItem( { item, index }: ItemProps ) {


    const { handleRemoveFromBag } = useCheckoutZod();

    const { setUpdateCart } = useBag()

    async function handleRemoveItem( index: number ) {
        await handleRemoveFromBag( index )
        setUpdateCart( ( prev ) => !prev )
    }


    return (
        <div className="flex max-s500:flex-col items-start gap-4 p-2 border-b pb-4">

            <Image
                src="/quentinha.png"
                width={100}
                height={257}
                sizes=""
                alt="quentinha"
                quality={100}
                priority
                className="transition-all duration-500 select-none" />
            <div className="w-full flex items-start justify-between">
                <div className="min-w-[200px] max-s500:min-w-full max-s500:flex max-s500:flex-col">
                    <div className="flex gap-4 max-s500:w-full max-s500:items-center max-s500:justify-between">
                        <h4 className="capitalize font-medium text-neutral-800">{item.name}</h4>
                        <h4 className="uppercase font-medium text-sm text-roxo/60 border p-2 leading-none rounded-lg border-roxo/20">{item.price.size}</h4>
                    </div>
                    <div className="sm:hidden flex gap-2 items-center mt-4">
                        <h4 className="font-bold ">{item?.price?.price?.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</h4>
                        <div
                            onClick={() => handleRemoveItem( index )}
                            className="flex hover:border-roxo/10 border border-transparent cursor-pointer items-center gap-2 rounded-lg w-fit p-2 px-2 bg-neutral-200 ">
                            <Trash className="fill-roxo" />

                            <button className=" text-xs  text-neutral-400">
                                REMOVER
                            </button>
                        </div>
                    </div>

                    <div
                        onClick={() => handleRemoveFromBag( index )}
                        className="flex max-sm:hidden hover:border-roxo/10 border border-transparent cursor-pointer items-center gap-2 rounded-lg w-fit p-2 px-2 bg-neutral-200 ">
                        <Trash className="fill-roxo" />

                        <button className=" text-xs  text-neutral-400">
                            REMOVER
                        </button>
                    </div>
                </div>
                <h4 className="font-bold max-sm:hidden">{item?.price?.price?.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</h4>
            </div>
        </div>

    );
}
