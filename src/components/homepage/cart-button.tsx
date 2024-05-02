import { getCookie } from "@/actions/cookies/get-cookie"

import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";



export default async function CartButton() {



    const cartIsEmpty = await getCookie( 'cartIsEmpty' )


    return (
        <>
            {cartIsEmpty === 'false' ?
                <Link href="/checkout" className="bg-amber-500 border border-neutral-50 transition-all border-l-0  flex gap-4 items-center w-fit p-4 left-0 bottom-16 animate-bounce rounded-tr-lg rounded-br-lg fixed   rounded-lg-4">
                    <ShoppingCartSimple weight="fill" size={30} className="fill-roxo" />
                    <p className="font-semibold text-neutral-50 text-xl tracking-wider">CARRINHO</p>
                </Link> : null
            }
        </>
    );
}