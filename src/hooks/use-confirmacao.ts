import { setCookie } from "@/actions/cookies/set-cookie";
import { OrderInterface } from "@/app/checkout/confirmacao/page";
import React from "react";

export function useConfirmacao() {


    const [order, setOrder] = React.useState<OrderInterface>(
        {
            address: {},
            itens: [],
            paymentMethod: '',
            total: 0
        }
    );

    React.useEffect( () => {
        const order = window.localStorage.getItem( 'pre-order' )
        if ( order ) {

            const parsedOrder = JSON.parse( order );
            setOrder( parsedOrder );
        }
    }, [] );


    async function handleSendOrder() {

        const message = `Olá gostaria de fazer um pedido dos seguintes itens: \n\n${order.itens.map( ( item: any ) => `🍽️ ${item.name} - ${( item.price.size ).toUpperCase()}` ).join( '\n' )}\n\n🏡 Endereço: ${order.address.street}, ${order.address.number} - ${order.address.complement}\n${order.address.neighborhood} - ${order.address.city} - ${order.address.uf}\n\n💰 Total: ${order.total.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )} \nForma de pagamento: ${order.paymentMethod} \n\nObrigado!`

        window.localStorage.removeItem( 'cart' );
        window.localStorage.removeItem( 'order' );

        await setCookie( 'cartIsEmpty', 'true' )
        await setCookie( 'cartIsEmpty', 'true' )

        const url = `https://api.whatsapp.com/send?phone=+5522997759060&text=${encodeURIComponent( message )}`
        window.open( url, "_blank" );

    }

    return {
        order,
        setOrder,
        handleSendOrder
    }
}