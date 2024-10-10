import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capsule Example Demo",
  description: "A demo app showcasing the Capsule SDK",
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
