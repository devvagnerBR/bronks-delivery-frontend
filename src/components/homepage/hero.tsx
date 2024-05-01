import Wrapper from "@/components/common/wrapper";
import { Basket } from "@phosphor-icons/react/dist/ssr";



export default async function Hero() {



    return (
        <Wrapper>
            <div className="w-full max-xms:items-center max-xms:flex max-xms:flex-col">
                <p className="text-6xl font-bold max-w-[950px] max-md:max-w-none  max-md:text-4xl max-xms:text-center max-xms:text-3xl">Quentinhas saborosas e prontas para mudar o seu dia<span className="text-roxo">!</span></p>


                <div className="mt-16 max-sm:mt-8 max-w-[750px] flex flex-col gap-4 max-sm:w-full max-xms:w-[90%]">

                    <div className="flex gap-4 w-full max-xms:flex-col ">

                        <div className="flex gap-2 w-full max-xms:items-center max-xms:justify-start">

                            <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-lg bg-amber-200">
                                <Basket weight="fill" className="fill-amber-600" size={18} />
                            </div>

                            <p className="text-neutral-600 select-none max-md:text-sm">Compra simples e segura</p>
                        </div>

                        <div className="flex gap-2 w-full items-center max-xms:items-center max-xms:justify-start">
                            <div className="h-8 w-8  shrink-0 flex items-center justify-center rounded-lg bg-amber-200">
                                <Basket weight="fill" className="fill-amber-600" size={18} />
                            </div>
                            <p className="text-neutral-600 select-none max-md:text-sm">Diversas forma de pagamento</p>
                        </div>

                    </div>


                    <div className="flex gap-4 w-full max-xms:flex-col">

                        <div className="flex gap-2 w-full items-center max-xms:items-center max-xms:justify-start">
                            <div className="h-8 w-8  shrink-0 flex items-center justify-center rounded-lg bg-amber-200">
                                <Basket weight="fill" className="fill-amber-600" size={18} />
                            </div>
                            <p className="text-neutral-600 select-none max-md:text-sm">Entregas rápidas</p>
                        </div>


                        <div className="flex gap-2 w-full items-center max-xms:items-center max-xms:justify-start">
                            <div className="h-8 w-8  shrink-0 flex items-center justify-center rounded-lg bg-roxo">
                                <Basket weight="fill" className="fill-white" size={18} />
                            </div>
                            <p className="text-neutral-600 select-none max-md:text-sm">A comida chega quente até você </p>
                        </div>


                    </div>

                </div>
            </div>
        </Wrapper>
    );
}