import "../styles/globals.css";
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
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="container mx-auto mb-10 mt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
