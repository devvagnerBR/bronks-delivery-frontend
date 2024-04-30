
import { cartFunctionalities } from "@/utils/bag";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getCEP } from '@/actions/get-cep';
import { useBag } from "@/context/bag-context";
import { ProductToCart } from "@/types/products";

const checkoutFormSchema = z.object( {
    cep: z.string().min( 8 ),
    street: z.string().min( 3 ),
    number: z.string().optional(),
    complement: z.string().min( 3 ),
    neighborhood: z.string().min( 3 ),
    city: z.string().min( 3 ),
    uf: z.string().min( 1 ),

} )


type checkoutData = z.infer<typeof checkoutFormSchema>

export function useCheckoutZod() {


    const { updateCart } = useBag();
    const { handleAddToBag, handleRemoveFromBag } = cartFunctionalities()

    const [paymentMethod, setPaymentMethod] = React.useState<string>( 'credit' )
    const [itens, setItens] = React.useState<ProductToCart[]>( [] );
    const [total, setTotal] = React.useState<number>( 0 );

    const itensState = {
        itens,
        setItens
    }

    const totalState = {
        total,
        setTotal
    }

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setFocus,
        formState: { errors, isSubmitting }
    } = useForm<checkoutData>( { resolver: zodResolver( checkoutFormSchema ) } )


    async function handleCheckoutForm( data: checkoutData ) {
        console.log( { ...data, paymentMethod } );
    }


    React.useEffect( () => {

        setTimeout( () => {

            if ( !watch( 'cep' ) || watch( 'cep' ).length < 8 ) return;

            async function fetchCEP() {

                const response = await getCEP( watch( 'cep' ) )

                if ( response.erro ) console.log( 'CEP não encontrado' );
                setValue( 'street', response.logradouro )
                setValue( 'neighborhood', response.bairro )
                setValue( 'city', response.localidade )
                setValue( 'uf', response.uf )
            }

            fetchCEP()

        }, 400 )

    }, [watch( 'cep' )] )

    const updateStateFromLocalStorage = () => {
        const order = window.localStorage.getItem( 'order' );
        if ( order ) {
            const parseOrder = JSON.parse( order );
            itensState.setItens( parseOrder.itens );
            totalState.setTotal( parseOrder.total );
        }
    };


    function handlePaymentMethodChange( method: string ) {
        setPaymentMethod( method )
    }



    React.useEffect( () => {
        setFocus( 'cep' )
    }, [setFocus] )

    React.useEffect( () => {
        updateStateFromLocalStorage();
    }, [updateCart] );

    return {
        register,
        handleSubmit,
        handleCheckoutForm,
        watch,
        handleAddToBag, handleRemoveFromBag,
        paymentMethod, setPaymentMethod,
        updateCart,
        itensState,
        totalState,
        updateStateFromLocalStorage,
        handlePaymentMethodChange
    }
}