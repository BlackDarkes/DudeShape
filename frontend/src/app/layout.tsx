import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import { QueryRouter } from "./routers/QueryRouter";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DudeShape",
  description: "Online furniture store",
  keywords: "buy, modern, furniture, online",
  authors: { name: "DaniilGordeev(BlackDarkes)" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dm_sans.variable}`}>
        <QueryRouter>{children}</QueryRouter>
      </body>
    </html>
  );
}
