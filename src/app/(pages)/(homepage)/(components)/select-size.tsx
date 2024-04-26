'use client'

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";



export default function SelectSize() {

    const searchParams = useSearchParams()

    const search = searchParams.get( 'tamanho' )


    const router = useRouter()
    const [size, setSize] = React.useState( 'g' )

    function handleSetSize( size: string ) {
        router.push( `/#menu?tamanho=${size}`
         )
    }

    return (
        <label className="flex gap-2 flex-col items-end text-sm text-neutral-500">
            Tamanhos:
            <select
                defaultValue={search!}
                onChange={( e ) => {
                    setSize( e.target.value )
                    handleSetSize( e.target.value )
                }
                }
                name="" id="" className="border outline-none border-roxo/20 rounded-lg p-4">
                <option value="g">Grande</option>
                <option value="m">Médio</option>
                <option value="p">Pequeno</option>
            </select>
        </label>
    );
}