import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "P-Layout | Events Coordination & Layouts App",
  description: "Events Coordination & Layouts App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
