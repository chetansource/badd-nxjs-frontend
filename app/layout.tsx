import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AuthContextProvider } from "@/lib/context/auth_context";


export const metadata: Metadata = {
  title: "BADD",
  description: "Bengaluru Aradhya Drink Directory",
};

const metropolis = localFont({
  src: "../public/font/Metropolis-Regular.otf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={metropolis.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
