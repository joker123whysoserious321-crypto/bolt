import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "foreseeai.com",
  description: "Where study turns into momentum",
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
