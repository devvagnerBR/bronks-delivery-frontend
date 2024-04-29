import Wrapper from "@/components/wrapper";
import { CurrencyDollarSimple, MapPinLine } from "@phosphor-icons/react/dist/ssr";
import CheckoutForm from "./components/checkout-form";
import PaymentForm from "./components/payment-form";
import BagWrapper from "./components/bag-wrapper";

export default async function CheckoutPage() {


    return (
        <Wrapper>
            <div className="min-h-[calc(100vh-447px)] w-full mt-8 flex gap-8 items-start">

                <div className="w-full">
                    <h1 className="font-bold">Complete seu pedido</h1>

                    <div className="p-8 bg-neutral-100 rounded-lg mt-4 w-full max-w-[740px]">

                        <header className="flex flex-col ">
                            <div className="flex flex-col gap-2 w-full ">
                                <div className="flex gap-2">
                                    <MapPinLine className="fill-roxo" size={22} />
                                    <div>
                                        <h2 className="">Endereço de entrega</h2>
                                        <p className="text-sm text-neutral-500">Informe o endereço onde deseja receber seu pedido</p>
                                    </div>
                                </div>
                                <CheckoutForm />
                            </div>

                        </header>
                    </div>
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
                </div>

                <div className="w-full">
                    <h1 className="font-bold">Seus itens selecionados</h1>
                    <BagWrapper />
               
                </div>

            </div>
        </Wrapper>
    );
}