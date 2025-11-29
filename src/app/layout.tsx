import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garden City Intelligence — AI · Cloud · DevOps",
  description: "Freelance AI, Cloud & DevOps engineers shipping production-grade solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
