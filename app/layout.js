import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Brfiilms | Películas solares em Belo Horizonte",
  description:
    "Película solar para carro, casa e empresa em Belo Horizonte. Menos calor, menos claridade e mais privacidade, com aplicação e garantia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
