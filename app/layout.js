import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mollu Motion",
  description: "몰?루",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className + " charaScrollBar bg-gray-700 "}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
