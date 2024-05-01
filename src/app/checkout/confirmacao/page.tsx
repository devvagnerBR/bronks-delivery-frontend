'use client'
import Wrapper from "@/components/common/wrapper";
import { useConfirmacao } from "@/hooks/use-confirmacao";
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

    const { handleSendOrder } = useConfirmacao()

    return (
        <Wrapper>
            <div className="w-full mt-32 min-h-[calc(100vh-400px)] max-sm:min-h-[300px] items-center justify-start flex flex-col max-xl:px-2">
                <h1 className="text-4xl font-semibold text-neutral-600 max-sm:text-2xl text-center">Parabéns, Pedido realizado!</h1>
                <h1 className="text-base font-light text-neutral-600 text-center">Agora é só clicar no botão à baixo para enviar o seu pedido via <span className="text-emerald-500 font-semibold">WhatsApp</span>
                </h1>
                <button
                    onClick={() => handleSendOrder()}
                    className="p-4 max-sm:p-2 flex items-center justify-center max-sm:text-sm gap-4 w-full max-w-[350px] border rounded-lg mt-8 bg-roxo/80 text-white border-roxo/40 hover:bg-roxo/70 transition-all">
                    ENVIAR PEDIDO VIA WHATSAPP
                    <WhatsappLogo
                        size={30}
                        weight="fill"
                        className="fill-white"
                    />
                </button>
            </div>
        </Wrapper>
    );
}