// import { getProductById } from "@/actions/get-product-by-id";
import { ProductInterface, ProductInterfaceWithQuantity } from "@/types/products";
import React from "react";

export function useCheckout() {

    async function handleMountBag() {

        const cart = window.localStorage.getItem( 'cart' );
        let cartItems = [];

        if ( cart ) cartItems = JSON.parse( cart );

        let cartProducts = [] as ProductInterfaceWithQuantity[];
        let total = 0;

        for ( let id in cartItems ) {
            const product = cartItems[id] as ProductInterface;
            let quantity = 1;
            cartProducts.push( { ...product, quantity } );
            total += product.price * quantity;
        }

        localStorage.setItem( 'order', JSON.stringify( { itens: cartProducts, total } ) );
    }

    async function handleAddToBag( product: ProductInterface, size?: string ) {
        const cart = window.localStorage.getItem( 'cart' );
        let cartItems = [];

        if ( cart ) cartItems = JSON.parse( cart );

        cartItems.push( { ...product, size } );

        window.localStorage.setItem( 'cart', JSON.stringify( cartItems ) );
        await handleMountBag()
    }


    async function handleRemoveFromBag( id: string ) {
        const cart = window.localStorage.getItem( 'cart' );
        let cartItems = [];

        if ( cart ) cartItems = JSON.parse( cart );

        const newCart = cartItems.filter( ( item: ProductInterface ) => item.id !== id );

        window.localStorage.setItem( 'cart', JSON.stringify( newCart ) );
        await handleMountBag()
    }

    return {
        // handleAddToBag_1,
        handleAddToBag,
        handleRemoveFromBag,
        // handleMountBag
    }
}