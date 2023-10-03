import RootProvider from "@/libs/RootProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "University Management",
  description: "manage university with best way",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </RootProvider>
  );
}
