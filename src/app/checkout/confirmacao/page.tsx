'use client'
import Wrapper from "@/components/common/wrapper";
import { ProductToCart } from "@/types/products";
import { WhatsappLogo } from "@phosphor-icons/react";
import React from "react";

export interface OrderInterface {
    address: {
        street?: string;
        number?: string;
        complement?: string;
        neighborhood?: string;
        city?: string;
        uf?: string;
    },

    itens: ProductToCart[],
    paymentMethod: string;
    total: number;
}

export default function ConfirmacaoPage() {

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
        
        const url = `https://api.whatsapp.com/send?phone=+5522997759060&text=${encodeURIComponent( message )}`
        window.open( url, "_blank" );

    }

    return (
        <Wrapper>
            <div className="w-full mt-32 min-h-[calc(100vh-400px)]">
                <h1 className="text-4xl font-semibold text-neutral-600">Parabéns, Pedido realizado!</h1>
                <h1 className="text-base font-light text-neutral-600">Agora é só clicar no botão à baixo para enviar o seu pedido via <span className="text-emerald-500 font-semibold">WhatsApp</span></h1>
                <button
                    onClick={handleSendOrder}
                    className="p-4 flex items-center gap-4 border rounded-lg mt-4 bg-roxo/80 text-white border-roxo/40 hover:bg-roxo/70 transition-all">
                    ENVIAR PEDIDO VIA WHATSAPP
                    <WhatsappLogo size={30} weight="fill" className="fill-white" />
                </button>
            </div>
        </Wrapper>
    );
}