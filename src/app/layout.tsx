import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Provider from "@/lib/providers/Provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Care",
  description: "Baby Fashion ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </Provider>
  );
}
