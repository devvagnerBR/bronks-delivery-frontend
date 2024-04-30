'use client'
import { CurrencyDollarSimple } from "@phosphor-icons/react/dist/ssr";
import PaymentForm from "./payment-form";

export default function PaymentFormWrapper() {

    return (
        <div className=" bg-neutral-100 rounded-lg mt-4 p-8">
            <div className="flex gap-2">
                <CurrencyDollarSimple className="fill-roxo" size={22} />
                <div>
                    <h2 className="">Pagamento</h2>
                    <p className="text-sm text-neutral-500">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </div>
            <PaymentForm />
        </div>
    );
}