'use client'

import React from "react";

interface BagContextInterface {

    updateCart: boolean
    setUpdateCart: React.Dispatch<React.SetStateAction<boolean>>


}

const BagContext = React.createContext<BagContextInterface | null>( null )



export function BagContextProvider( { children }: { children: React.ReactNode } ) {

    const [updateCart, setUpdateCart] = React.useState<boolean>( true )

    return (
        <BagContext.Provider value={{ setUpdateCart, updateCart }}>
            {children}
        </BagContext.Provider>
    )
}


export function useBag() {
    const context = React.useContext( BagContext )
    if ( !context ) {
        throw new Error( "useBag must be used within a BagContextProvider" )
    }
    return context
}
