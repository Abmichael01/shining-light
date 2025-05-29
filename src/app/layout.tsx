import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "./providers";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-fancy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shining Light School",
  description: "Empowering minds, shaping futures.",
  icons: {
    icon: "/logo.png", // This sets the favicon
    apple: "/logo.png",
    shortcut: "/logo.png",
  },                                                                                                                                                                                                               
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
