import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generic USD • The base asset for your chain",
  description:
    "GUSD is the fully collateralized asset that brings yield and unifies liquidity for your chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
