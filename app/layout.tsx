import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
// import "@richaadgigi/stylexui/css/xui.min.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tradesignalhive.com"),
  title: "Trade Signal Hive - Build Your Trading Empire",
  description:
    "Trade Signal Hive is a platform that helps you build your trading empire with real-time crypto and stock signals. Invest in the best traders and copy their trades. Manage your portfolio and track your performance.",
  keywords: ["trade signal", "crypto signal", "stock signal", "copy trade", "portfolio management", "performance tracking"],
  authors: [{ name: "Trade Signal Hive" }],
  creator: "Trade Signal Hive",
  publisher: "Trade Signal Hive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Trade Signal Hive - Build Your Trading Empire",
    description:
      "Trade Signal Hive is a platform that helps you build your trading empire with real-time crypto and stock signals. Invest in the best traders and copy their trades. Manage your portfolio and track your performance.",
    url: "https://tradesignalhive.com",
    siteName: "Trade Signal Hive",
    images: [
      {
        url: "https://tradesignalhive.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trade Signal Hive - Build Your Trading Empire",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Signal Hive - Build Your Trading Empire",
    description:
      "Trade Signal Hive is a platform that helps you build your trading empire with real-time crypto and stock signals. Invest in the best traders and copy their trades. Manage your portfolio and track your performance.",
    images: ["https://tradesignalhive.com/og-image.jpg"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/xui-generated.css" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ScrollToTop />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <script src="//code.jivosite.com/widget/XwTEQbPc0i" async></script>
      </body>
    </html>
  );
}

