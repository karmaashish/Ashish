import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambaradi — AI Employees for Every Business",
  description:
    "Deploy AI employees that work 24/7 on WhatsApp and Telegram. Answer inquiries, capture leads, book appointments — in English, Arabic, and Hindi. Built for small businesses in India and the GCC.",
  keywords: [
    "AI employee",
    "WhatsApp chatbot",
    "Telegram bot",
    "small business India",
    "GCC business automation",
    "multilingual AI",
    "lead generation",
    "appointment booking",
  ],
  openGraph: {
    title: "Ambaradi — AI Employees for Every Business",
    description:
      "Your business, working 24/7. AI employees on WhatsApp and Telegram — in English, Arabic, and Hindi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
