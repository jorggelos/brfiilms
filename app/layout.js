import { Archivo, Manrope } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata = {
  title: "Brfiilms | Películas solares em Belo Horizonte",
  description:
    "Película solar para carro, casa e empresa em Belo Horizonte. Menos calor, menos claridade e mais privacidade, com aplicação e garantia.",
  icons: { icon: "/logo-nav.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
