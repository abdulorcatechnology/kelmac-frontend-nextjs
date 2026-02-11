import type { Metadata } from "next";
import { Inter, Inter_Tight, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { PageTransitionWrapper } from "@/components/layout/PageTransitionWrapper";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { ReduxProvider } from "@/store/ReduxProvider";
import { SocketProvider } from "@/store/SocketProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});
const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
  variable: "--font-hedvig",
});

export const metadata: Metadata = {
  title: "Kelmac Group",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} ${hedvig.variable} antialiased`}
      >
        <SocketProvider>
          <ReduxProvider>
            <ProgressBar />
            <Header />
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
                success: {
                  duration: 3000,
                  style: {
                    background: "#10b981",
                    color: "#fff",
                  },
                },
                error: {
                  duration: 4000,
                  style: {
                    background: "#ef4444",
                    color: "#fff",
                  },
                },
              }}
            />
          </ReduxProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
