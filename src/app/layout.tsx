import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME } from "@/utils/constants";
import "@/styles/base/reset.scss";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description:
    "Empower your business with actionable insights! At The Kaayi, we specialize in collecting and analyzing feedback to provide comprehensive reports for business owners. Elevate your decision-making process with valuable information gathered directly from your customers, enabling you to enhance and grow your business effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
