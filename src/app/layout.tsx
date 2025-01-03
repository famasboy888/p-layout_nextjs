import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import "~/app/globals.css";
import Footer from "~/components/footer/Footer";
import Header from "~/components/header/Header";

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
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container mx-auto mb-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
