import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "./globals.css";
import MainNavbar from "@/components/navbar/main-navbar";
import MainFooter from "@/components/footer/main-footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
