import { Providers } from "@/store/providers";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/theme.css";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: any = {
  title: "Plane",
  description: "Sign-in google",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} theme-light`}>
            {children}
        </body>
      </html>
    </Providers> 
  );
}
