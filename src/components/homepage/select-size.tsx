'use client'

import { useRouter, useSearchParams } from "next/navigation"






export default function SelectSize() {

    const searchParams = useSearchParams()

    const search = searchParams.get( 'tamanho' )

    const router = useRouter()

    function handleSetSize( size: string ) {
        router.push( `/?tamanho=${size}#menu`
        )
    }



    return (
        <label className="flex gap-2 flex-col items-end text-sm text-neutral-500">
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