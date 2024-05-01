'use client'

import toast from "react-hot-toast";
import { delay } from "../utils/delay";

export const addItemToCartNotificationHome = ( item: string ) => toast.promise(
    delay( 900 ),
    {
        loading: `adicionando ${item}...`,
        success: `${item} adicionado à sacola!`,
        error: 'Ocorreu um erro ao adicionar item!',
    }, {
    style: {
        textTransform: 'uppercase',
        fontWeight: 'bolder',
        color: '#fff',
        fontSize: '0.81rem',
        textAlign: 'center',
        backgroundColor: '#8047F8',

    }
}
);

export const removeItemFromCartNotification = () => toast.promise(
    delay( 500 ),
    {
        loading: 'Removendo item...',
        success: 'Item removido do carrinho!',
        error: 'Ocorreu um erro ao deletar o comentário!',
    }
);


export const addItemToCartNotification = () => toast.promise(
    delay( 500 ),
    {
        loading: 'adicionando item...',
        success: 'Item adicionado do carrinho!',
        error: 'Ocorreu um erro ao adicionar item!',
    }
);
