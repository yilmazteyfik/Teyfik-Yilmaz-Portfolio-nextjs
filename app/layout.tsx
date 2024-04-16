import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "teyfikyilmaz.com",
    template: "%s | teyfikyilmaz.com",
  },
  description: "Harnessing the power of coding to deliver tailored and unique solutions.",
  openGraph: {
    title: "teyfikyilmaz.com",
    description:
      "Harnessing the power of coding to deliver tailored and unique solutions.",
    url: "https://www.teyfikyilmaz.com",
    siteName: "teyfikyilmaz.com",
    images: [
      {
        url: "https://chronark.com/teyfikyilmazLink.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "teyfikyilmaz.com",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/me.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
