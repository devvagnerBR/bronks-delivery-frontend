import { getCookie } from "@/actions/cookies/get-cookie";
import { setCookie } from "@/actions/cookies/set-cookie";
import { addItemToCartNotificationHome } from "@/libs/react-hot-toast";
import { ProductToDomain } from "@/types/products";


export function useBagFunctions() {

  


    async function handleMountBag() {

        const cart = window.localStorage.getItem( 'cart' );
        let cartItems = [];

        if ( cart ) cartItems = JSON.parse( cart );

        let total = 0;

        cartItems.forEach( ( item: ProductToDomain & { size: string } ) => {
            total += Number( item.price.price );
        } );

        localStorage.setItem( 'order', JSON.stringify( { itens: cartItems, total } ) );

    }

    async function handleAddToBag( product: ProductToDomain, size: string ) {

        const cart = window.localStorage.getItem( 'cart' );
        let cartItems = [];

        if ( cart ) cartItems = JSON.parse( cart );
        if ( size ) cartItems.push( { ...product, price: { price: product.price[size].price, size: product.price[size].size } } );

        window.localStorage.setItem( 'cart', JSON.stringify( cartItems ) );
        await handleMountBag();

        const cartIsEmpty = await getCookie( 'cartIsEmpty' );

        if ( cartIsEmpty === 'false' ) return;
        await setCookie( 'cartIsEmpty', 'false' );
        await setCookie( 'cartIsEmpty', 'false' );
        await addItemToCartNotificationHome( product.name )


    }


    async function handleRemoveFromBag( index: number ) {

        const cart = window.localStorage.getItem( 'cart' );
        let cartItems = [];

        if ( cart ) cartItems = JSON.parse( cart );

        cartItems.splice( index, 1 );

        window.localStorage.setItem( 'cart', JSON.stringify( cartItems ) );
        await handleMountBag()

        if ( cartItems.length === 0 ) await setCookie( 'cartIsEmpty', 'true' )
        if ( cartItems.length === 0 ) await setCookie( 'cartIsEmpty', 'true' )



    }
    return {
        handleAddToBag,
        handleRemoveFromBag,
        handleMountBag,

    }
}