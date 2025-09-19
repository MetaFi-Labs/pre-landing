import type { Metadata } from "next";
import { displayFont, geistMono, geistSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generic Money • $gmUSD",
  description:
    "Generic Money, very soon in your trusted wallet. A liquid-glass teaser for the gmUSD stablecoin.",
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
