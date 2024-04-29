'use client'

import { ProductInterfaceWithQuantity } from "@/types/products";
import BagItem from "./bag-item";
import React from "react";


export default function BagWrapper() {


    const [itens, setItens] = React.useState<ProductInterfaceWithQuantity[]>( [] );
    const [total, setTotal] = React.useState<number>( 0 );

    const updateStateFromLocalStorage = () => {
        const order = window.localStorage.getItem( 'order' );
        if ( order ) {
            const parseOrder = JSON.parse( order );
            setItens( parseOrder.itens );
            setTotal( parseOrder.total );
        }
    };

    React.useEffect( () => {
        updateStateFromLocalStorage();
    }, [] );


    return (
        <div className="p-8 flex flex-col gap-4 bg-neutral-100 rounded-lg mt-4 pr-4">
            <div className={` ${itens.length > 4 && "overflow-y-scroll overflow-x-hidden max-h-[322px]"}`}>
                {itens && itens.map( ( item: ProductInterfaceWithQuantity, index: number ) => <BagItem key={index} item={item} /> )}
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between w-full">
                    <p className="text-sm text-neutral-500">Total de itens:</p>
                    <p className="text-neutral-500">{total?.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-sm text-neutral-500">Entrega:</p>
                    <p className="text-neutral-500">{Number( 3.50 ).toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</p>
                </div>
                <div className="flex justify-between w-full mt-4">
                    <p className="text-lg font-bold text-neutral-600">Total:</p>
                    <p className="text-lg font-bold text-neutral-600">{( total + 3.50 ).toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</p>
                </div>
                <button className="mt-4 bg-amber-400 p-4 rounded-lg text-neutral-50 font-bold tracking-normal">CONFIRMAR PEDIDO</button>
            </div>
        </div>
    );
}