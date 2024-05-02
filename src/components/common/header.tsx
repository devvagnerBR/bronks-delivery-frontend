import Image from "next/image";
import { Basket } from "@phosphor-icons/react/dist/ssr/Basket";
import Wrapper from "./wrapper";
import Link from "next/link";

export interface ComponentsHeaderProps {


}

export default async function Header() {

    return (
        <Wrapper >
            <header className="flex max-md:flex-col max-md:justify-center max-md:gap-8 items-center justify-between w-full mt-8">
                <Link href="/">
                    <Image className=""
                        src="/logo.svg"
                        alt="logo"
                        width={200}
                        height={80}
                        priority
                        style={{ width: 'auto', height: 'auto' }} />
                </Link>

                <nav className="flex gap-2 max-s500:gap-8 max-s500:w-full max-s500:items-center max-s500:justify-center px-2">
                    <Link
                        href="/?tamanho=g#menu"
                        className="p-3 max-s500:p-4 max-s500:flex max-s500:items-center max-s500:justify-center cursor-pointer bg-roxo/20 max-s500:w-full rounded-lg border border-transparent text-roxo hover:border hover:border-purple-300">
                        Cardápio
                    </Link>
                    <Link
                        href="/checkout"
                        className="bg-amber-200 cursor-pointer w-14 max-s500:w-full rounded-md flex items-center justify-center border border-transparent text-roxo hover:border hover:border-amber-400">
                        <Basket weight="fill" className="fill-amber-600" size={22} />
                    </Link>
                </nav>
            </header>
        </Wrapper>
    );
}