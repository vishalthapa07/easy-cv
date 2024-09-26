import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Easy CV",
  description: "easy cv builder",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
