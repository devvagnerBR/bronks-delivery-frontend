'use client'

import { MapPinLine } from "@phosphor-icons/react/dist/ssr";
import AddressForm from "./address-form";

export default  function AddressFormWrapper() {

    return (
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
                    <AddressForm />
                </div>

            </header>
        </div>
    );
}