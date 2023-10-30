import { Providers } from "@/store/providers";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/theme.css";
import "../styles/loading.css";
import SWRProvider from "@/components/commont/swr-provider";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: any = {
  title: "Plane",
  description: "Plane",
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
            <SWRProvider>
              {children}
            </SWRProvider>
        </body>
      </html>
    </Providers> 
  );
}
