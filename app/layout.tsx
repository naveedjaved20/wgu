import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed of Business Scholarship | WGU",
  description: "Apply for the Speed of Business Scholarship worth up to $3,000 at Western Governors University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
