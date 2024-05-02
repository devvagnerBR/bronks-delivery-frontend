'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"






export default function SelectSize() {

    const searchParams = useSearchParams()
    const pathName = usePathname()
    
    const search = searchParams.get( 'tamanho' )

    const router = useRouter()

    function handleSetSize( size: string ) {
        router.push( `/?tamanho=${size}#menu`
        )
    }


    React.useEffect( () => {
        if ( pathName === '/' ) return
        window.location.href = '/'
    }, [] )


    return (
        <label className="flex max-xms:items-center max-xms:justify-center max-xms:mt-4 gap-2 flex-col items-end text-sm text-neutral-500">
            Tamanhos:
            <select
                defaultValue={search!}
                onChange={( e ) => {
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