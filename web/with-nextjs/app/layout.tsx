import "./globals.css";
import type { Metadata } from "next";
import { Provider as JotaiProvider } from "jotai";

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
      <body>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
}
