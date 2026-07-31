import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G8 Flow",
  description: "G8 Flow portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
