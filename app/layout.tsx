import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto, Bebas_Neue, Roboto_Condensed } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster as TemporalToaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"], // or any weights you need
  variable: "--font-roboto", // optional custom CSS variable
  display: "swap", // controls how the font is displayed
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400"], // or any weights you need
  variable: "--font-robotoCondensed", // optional custom CSS variable --font-roboto-condensed
  display: "swap", // controls how the font is displayed
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue typically comes in one weight
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Congreso de Astrofotografía",
  description: "Sitio web del Congreso Internacional de Astrofotografía.",
  icons: {
    icon: "/icon.png",
  },
};
// Fix Auth
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${roboto.variable} ${robotoCondensed.variable} ${bebasNeue.variable}`}
        >
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="astrofoto-theme"
          >
            <Toaster theme="light" position="bottom-center" />
            {children}
            <TemporalToaster />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
