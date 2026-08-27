import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Learn Next JS",
  description: "Entirely for learning the next js with typescript project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
