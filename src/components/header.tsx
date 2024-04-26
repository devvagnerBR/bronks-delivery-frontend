import Image from "next/image";
import { Basket } from "@phosphor-icons/react/dist/ssr/Basket"
import Wrapper from "./wrapper";

export interface ComponentsHeaderProps {


}

export default async function Header() {

    return (
        <Wrapper >
            <div className="flex max-md:flex-col max-md:justify-center max-md:gap-8 items-center justify-between w-full mt-8">
                <Image className="" src="/logo.svg" alt="logo" width={200} height={80} priority style={{ width: 'auto', height: 'auto' }} />

                <nav className="flex gap-2">
                    <a className="p-2 cursor-pointer select-nome bg-roxo/20 rounded-lg border border-transparent text-roxo hover:border hover:border-purple-300">Cardápio</a>

                    <div className="bg-amber-200 cursor-pointer w-10 rounded-md select-nome flex items-center justify-center border border-transparent text-roxo hover:border hover:border-amber-400">
                        <Basket weight="fill" className="fill-amber-600" size={22} />
                    </div>
                </nav>
            </div>
        </Wrapper>
    );
}