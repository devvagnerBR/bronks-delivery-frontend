'use client'

import { useCheckoutZod } from "@/hooks/use-checkout-zod";
import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money, PixLogo } from "@phosphor-icons/react";
import { ProductToCart } from "@/types/products";
import BagItem from "./bag-item";


export default function FormWrapper() {

    const {
        handleSubmit,
        handleCheckoutForm,
        register,
        paymentMethod,
        itensState,
        totalState,
        handlePaymentMethodChange,
        isSubmitting,
        invalidCEPMessage
    } = useCheckoutZod();

    return (
        <form
            onSubmit={handleSubmit( handleCheckoutForm )}
            className="min-h-[calc(100vh-447px)] w-full mt-8 flex gap-8 items-start max-xl:flex-col">
            <div
                id="FORM ADDRESS"
                className="w-full mt-3">
                <h1 className="font-bold max-lg:pl-8">Complete seu pedido</h1>
                <div className="p-8 max-md:p-4  rounded-lg mt-4 w-full max-w-[640px] max-lg:max-w-none">

                    <header className="flex flex-col ">
                        <div className="flex flex-col gap-2 w-full ">
                            <div className="flex gap-2">
                                <MapPinLine className="fill-roxo" size={22} />
                                <div>
                                    <h2 className="">Endereço de entrega</h2>
                                    <p className="text-sm text-neutral-500">Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </div>
                            <div
                                className="mt-4 flex flex-col gap-4 w-full">
                                <div className="flex items-center gap-4">

                                    <input
                                        id="cep"
                                        className={`bg-neutral-200/40 border  border-neutral-200 h-11 max-w-52 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm focus:border-roxo/30 ${invalidCEPMessage && 'border-red-400  focus:border-red-400'}`}
                                        placeholder="CEP"
                                        maxLength={8}
                                        required
                                        {...register( 'cep' )}
                                        type="text"

                                    />
                                    {invalidCEPMessage && <p className="text-red-400 text-sm">{invalidCEPMessage}</p>}
                                </div>
                                <input
                                    disabled
                                    className="bg-neutral-200/40 border w-full max-w-[570px] border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                                    placeholder="Rua"
                                    {...register( 'street' )}

                                    type="text"
                                />
                                <div className="flex gap-4 max-sm:flex-col">
                                    <input
                                        className="bg-neutral-200/40 border w-full  border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                                        type="text"
                                        placeholder="Número"
                                        {...register( 'number' )}
                                    />
                                    <input
                                        required
                                        className="bg-neutral-200/40 border w-full  border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                                        placeholder="Complemento"
                                        type="text"
                                        {...register( 'complement' )}

                                    />
                                </div>
                                <div className="flex gap-4 w-full max-lg:flex-col ">
                                    <input
                                        disabled
                                        className="bg-neutral-200/40 border w-full border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                                        placeholder="Bairro"
                                        type="text"
                                        {...register( 'neighborhood' )}

                                    />
                                    <input
                                        disabled
                                        className="bg-neutral-200/40 border w-[790px] max-lg:w-full border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                                        placeholder="Cidade"
                                        type="text"
                                        {...register( 'city' )}
                                    />
                                    <input
                                        disabled
                                        className="bg-neutral-200/40 border w-[60px] max-lg:w-full border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                                        placeholder="UF"
                                        type="text"
                                        {...register( 'uf' )}
                                    />
                                </div>
                            </div>
                        </div>

                    </header>
                </div>

                <div className=" bg-neutral-100 rounded-lg mt-4 p-8 max-md:p-4 max-xl:mx-4">
                    <div className="flex gap-2 ">
                        <CurrencyDollarSimple className="fill-roxo shrink-0" size={22} />
                        <div>
                            <h2 className="">Pagamento</h2>
                            <p className="text-sm text-neutral-500">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                    <div className=" bg-neutral-100 flex max-md:flex-col gap-2 rounded-lg mt-8 w-full">
                        <div
                            onClick={() => handlePaymentMethodChange( 'cartão de crédito' )}
                            className={`flex ${paymentMethod === 'cartão de crédito' && 'bg-roxo/20 border border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30  transition-all border hover:bg-roxo/20`}>
                            <CreditCard className="fill-roxo" size={20} />
                            <p className="text-xs uppercase text-neutral-500">crédito</p>
                        </div>
                        <div
                            onClick={() => handlePaymentMethodChange( 'cartão de débito' )}
                            className={`flex ${paymentMethod === 'cartão de débito' && 'bg-roxo/20 border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30  transition-all border hover:bg-roxo/20`}>
                            <Bank className="fill-roxo" size={20} />
                            <p className="text-xs uppercase text-neutral-500">débito</p>
                        </div>
                        <div
                            onClick={() => handlePaymentMethodChange( 'dinheiro' )}
                            className={`flex ${paymentMethod === 'dinheiro' && 'bg-roxo/20 border-roxo/30 border'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30  transition-all border hover:bg-roxo/20`}>
                            <Money className="fill-roxo" size={20} />
                            <p className="text-xs uppercase text-neutral-500">dinheiro</p>
                        </div>
                        <div
                            onClick={() => handlePaymentMethodChange( 'pix' )}
                            className={`flex ${paymentMethod === 'pix' && 'bg-roxo/20 border-roxo/30'} gap-2 w-full bg-neutral-200 rounded-lg py-4 px-2 items-center justify-center cursor-pointer hover:border-roxo/30 transition-all border hover:bg-roxo/20`}>
                            <PixLogo className="fill-roxo" size={20} />
                            <p className="text-xs uppercase text-neutral-500">Pix</p>
                        </div>

                    </div>
                    {/* <PaymentForm /> */}
                </div>
            </div>

            <div
                id="CART ITENS"
                className="w-full p-4">
                <h1 className="font-bold">Seus itens selecionados</h1>
                {/* <BagWrapper /> */}
                <div className="p-8 max-md:p-2 flex flex-col gap-4 bg-neutral-100 rounded-lg mt-4 pr-4">
                    <div className={` ${itensState.itens.length > 3 && "overflow-y-scroll overflow-x-hidden max-h-[322px]"}`}>
                        {itensState.itens && itensState.itens.map( ( item: ProductToCart, index: number ) => <BagItem key={index} item={item} index={index} /> )}
                    </div>

                    <div

                        className="flex flex-col">
                        <div className="flex justify-between w-full">
                            <p className="text-sm text-neutral-500">Total de itens:</p>
                            <p className="text-neutral-500">{totalState.total?.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-sm text-neutral-500">Entrega:</p>
                            <p className="text-neutral-500">{Number( 3.50 ).toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</p>
                        </div>
                        <div className="flex justify-between w-full mt-4">
                            <p className="text-lg font-bold text-neutral-600">Total:</p>
                            <p className="text-lg font-bold text-neutral-600">{( totalState.total + 3.50 ).toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL' } )}</p>
                        </div>
                        {isSubmitting ?
                            <div className="mt-4 flex items-center justify-center bg-amber-400/50 h-[55px] disabled:bg-red-400 rounded-lg text-neutral-50 font-bold tracking-normal">
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-roxo/80 animate-bounce [animation-delay:.7s]"></div>
                                    <div className="w-3 h-3 rounded-full bg-roxo/80 animate-bounce [animation-delay:.6s]"></div>
                                    <div className="w-3 h-3 rounded-full bg-roxo/80 animate-bounce [animation-delay:.5s]"></div>
                                </div>
                            </div> :
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 bg-amber-400 p-4 disabled:bg-red-400 rounded-lg text-neutral-50 font-bold tracking-normal">
                                CONFIRMAR PEDIDO
                            </button>
                        }

                    </div>
                </div>
            </div>
        </form>
    );
}