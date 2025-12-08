import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reuni SMA Walkot Makassar",
  description: "Reuni SMA Walkot Makassar",
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
