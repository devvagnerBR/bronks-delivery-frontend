'use client'

import { ProductInterfaceWithQuantity } from "@/types/products";
import { Minus, Plus } from "@phosphor-icons/react";
import Image from 'next/image';
import { useCheckout } from '../use-checkout';


export interface ItemProps {

    item: ProductInterfaceWithQuantity
}

export default function BagItem( { item }: ItemProps ) {


    const { handleAddToBag, handleRemoveFromBag } = useCheckout();

    return (
        <div className="flex items-start gap-4 p-2 border-b pb-4">

            <Image
                src="/quentinha.png"
                width={100}
                height={257}
                sizes=""
                alt="quentinha"
                quality={100}
                priority
                className="transition-all duration-500" />
            <div className="min-w-[200px]">
                <h4 className="capitalize font-medium text-neutral-800">{item.name}</h4>
                <div className="flex items-center justify-center gap-4 p-2 rounded-lg w-fit bg-neutral-200 mt-2 min-w-[120px]">
                    <Minus
                        onClick={() => handleRemoveFromBag( item.id )}
                        size={22} className="fill-roxo cursor-pointer hover:scale-110" />
                    <h1 className="font-semibold select-none">{item.quantity}</h1>
                    <Plus
                        onClick={() => handleAddToBag( item )}
                        size={22} className="fill-roxo cursor-pointer hover:scale-110" />
                </div>
            </div>
            <h4 className="font-bold">{item?.price?.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</h4>
            <h4 className="font-bold">{item.size}</h4>
        </div>

    );
}