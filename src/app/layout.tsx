import "~/styles/globals.css";
import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "~/app/components/header/Header";
import Footer from "~/app/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "P-Layout | Events Coordination & Layouts App",
  description: "Events Coordination & Layouts App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto mt-28 mb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
