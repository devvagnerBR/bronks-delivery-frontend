'use client'

import { getCookie } from "@/actions/cookies/get-cookie";
import { setCookie } from "@/actions/cookies/set-cookie";
import React from "react";


export default function Wrapper( { children }: React.PropsWithChildren ) {

    React.useEffect( () => {
        async function handleSetCart() {

            const cartIsEmpty = await getCookie( 'cartIsEmpty' );
            if ( typeof cartIsEmpty !== 'undefined' ) return
            await setCookie( 'cartIsEmpty', 'true' );
        }

        handleSetCart();
    }, [] );


    return (
        <div className="max-w-[1280px] m-auto flex items-center flex-col justify-center max-xl:px-4 max-xms:p-2">
            {children}
        </div>
    );
}