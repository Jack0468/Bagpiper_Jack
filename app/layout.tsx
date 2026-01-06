import "@/app/globals.css"; // The @ refers to your root directory
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jack McCudden Bagpiping",
  description: "Sydney's Premier Bagpiper for Hire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}