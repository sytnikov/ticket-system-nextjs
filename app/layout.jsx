import { Rubik } from "next/font/google";

import "./globals.css";

export const dynamic = "force-dynamic"

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "TICKET.ME",
  description: "Create, track and solve your tickets easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
