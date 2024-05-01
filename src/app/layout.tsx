import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { BagContextProvider } from '@/context/bag-context';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css"
import { Toaster } from 'react-hot-toast';


const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
    title: "Bronks Delivery",
    description: "Delivery de marmitas caseiras em Rio das Ostras",
    icons: {
        icon: '/logo.png'
    }
};

export default function RootLayout( {
    children,
}: Readonly<{
    children: React.ReactNode;
}> ) {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <BagContextProvider>
                    <Toaster />
                    <Header />
                    {children}
                    <Footer />
                </BagContextProvider>
            </body>
        </html>
    );
}
