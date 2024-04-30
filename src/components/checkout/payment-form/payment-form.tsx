'use client'


import { useCheckoutZod } from "@/hooks/use-checkout-zod";
import { Bank, CreditCard, Money, PixLogo } from "@phosphor-icons/react/dist/ssr";




export default function PaymentForm() {


    const { paymentMethod, setPaymentMethod } = useCheckoutZod()

    function handlePaymentMethodChange( method: string ) {
        setPaymentMethod( method )
    }



    return (
        <div className=" bg-neutral-100 flex gap-2 rounded-lg mt-8 w-full">
            <div
                // onClick={() => handlePaymentMethodChange( 'credit' )}
                className={`flex ${paymentMethod === 'credit' && 'bg-roxo/20 border border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30 border-transparent transition-all border hover:bg-roxo/20`}>
                <CreditCard className="fill-roxo" size={20} />
                <p className="text-xs uppercase text-neutral-500">crédito</p>
            </div>
            <div
                // onClick={() => handlePaymentMethodChange( 'debit' )}
                className={`flex ${paymentMethod === 'debit' && 'bg-roxo/20 border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30 border-transparent transition-all border hover:bg-roxo/20`}>
                <Bank className="fill-roxo" size={20} />
                <p className="text-xs uppercase text-neutral-500">débito</p>
            </div>
            <div
                // onClick={() => handlePaymentMethodChange( 'money' )}
                className={`flex ${paymentMethod === 'money' && 'bg-roxo/20 border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30 border-transparent transition-all border hover:bg-roxo/20`}>
                <Money className="fill-roxo" size={20} />
                <p className="text-xs uppercase text-neutral-500">dinheiro</p>
            </div>
            <div
                // onClick={() => handlePaymentMethodChange( 'pix' )}
                className={`flex ${paymentMethod === 'pix' && 'bg-roxo/20 border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30 border-transparent transition-all border hover:bg-roxo/20`}>
                <PixLogo className="fill-roxo" size={20} />
                <p className="text-xs uppercase text-neutral-500">Pix</p>
            </div>

        </div>
    );
}