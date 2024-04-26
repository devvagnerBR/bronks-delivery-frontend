import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Wrapper from "../../components/wrapper";
import Footer from "@/components/footer";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Marmitas da Maria",
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
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
