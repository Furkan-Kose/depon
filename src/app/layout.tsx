import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WpButton";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Depon",
  description: "Depon, Türkiye çapında benzin istasyonu marketlerine ve toptancılara otomotiv, otobakım, kozmetik, gıda ve GSM aksesuarları gibi ürünlerin satış ve dağıtım hizmetlerini sunan bir firmadır. Güvenilir bayilik ağıyla geniş bir yelpazede hizmet veriyoruz.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Depon",
    description: "Depon, Türkiye çapında benzin istasyonu marketlerine ve toptancılara otomotiv, otobakım, kozmetik, gıda ve GSM aksesuarları gibi ürünlerin satış ve dağıtım hizmetlerini sunan bir firmadır. Güvenilir bayilik ağıyla geniş bir yelpazede hizmet veriyoruz.",
    type: "website",
    locale: "tr_TR",
    url: "https://depon.com.tr",
    siteName: "Depon",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
