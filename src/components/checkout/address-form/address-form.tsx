'use client'

import { useCheckoutZod } from "@/hooks/use-checkout-zod";




export default function AddressForm() {


    const { register, watch } = useCheckoutZod()



    return (
        <div
            className="mt-4 flex flex-col gap-4 w-full">
            <input
                id="cep"
                className="bg-neutral-200/40 border border-neutral-200 h-11 max-w-52 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm"
                placeholder="CEP"
                maxLength={8}
                required
                {...register( 'cep' )}
                type="text"

            />
            <input
                disabled
                className="bg-neutral-200/40 border w-full max-w-[570px] border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                placeholder="Rua"
                {...register( 'street' )}
                
                type="text"
            />
            <div className="flex gap-4">
                <input
                    className="bg-neutral-200/40 border w-full  border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                    type="text"
                    placeholder="Número"
                    {...register( 'number' )}
                />
                <input
                    className="bg-neutral-200/40 border w-full  border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                    placeholder="Complemento"
                    type="text"
                    {...register( 'complement' )}

                />
            </div>
            <div className="flex gap-4 w-full">
                <input
                    disabled
                    className="bg-neutral-200/40 border w-full border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                    placeholder="Bairro"
                    type="text"
                    {...register( 'neighborhood' )}

                />
                <input
                    disabled
                    className="bg-neutral-200/40 border w-[790px] border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                    placeholder="Cidade"
                    type="text"
                    {...register( 'city' )}
                />
                <input
                    disabled
                    className="bg-neutral-200/40 border w-[60px]  border-neutral-200 h-11 rounded-lg outline-none pl-4 text-neutral-500 placeholder:text-neutral-500 placeholder:text-sm text-sm disabled:bg-neutral-200 disabled:placeholder:text-neutral-500/50"
                    placeholder="UF"
                    type="text"
                    {...register( 'uf' )}
                />

            </div>
        </div>
    );
}