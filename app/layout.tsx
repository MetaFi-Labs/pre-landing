import type { Metadata } from "next";
import { displayFont, geistMono, geistSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generic USD • Unified Liquidity for Ethereum",
  description:
    "GUSD is the fully collateralized, real-yield stablecoin unifying liquidity across Ethereum and its rollups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
