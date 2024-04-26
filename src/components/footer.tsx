import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr"

export default async function Footer() {

    return (
        <footer className="mt-16 bg-roxo w-full flex flex-col  items-center justify-center">
            <div className="w-full flex  gap-32 max-w-[1280px] m-auto my-16">
                <div>
                    <h4 className="text-4xl  font-bold text-neutral-50">INFORMAÇÕES</h4>
                    <div className="flex flex-col gap-1 mt-8">
                        <p className="text-sm text-neutral-50/70">Rua Oliver de Andrade. Nº49 - Rio de Janeiro, Brasil 28890-400</p>
                        <p className="text-sm text-neutral-50/70">www.bronksdelivery.com.br</p>
                        <p className="text-sm text-neutral-50/70">(22) 99947-9999</p>
                    </div>

                </div>
                <div>
                    <h4 className="text-4xl  font-bold text-neutral-50">REDES SOCIAIS</h4>
                    <div className="flex  gap-1 mt-8">
                        <InstagramLogo weight="fill" size={32} className="fill-neutral-50/70" />
                        <FacebookLogo weight="fill" size={32} className="fill-neutral-50/70" />
                    </div>
                </div>
            </div>
            <p className="mb-2 text-neutral-50/50 text-sm font-light">Desenvolvido por <span className="cursor-pointer text-neutral-50/80">devvagner</span> - 2024 - Todos os direitos reservados</p>
        </footer>
    );
}