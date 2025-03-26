import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details - Create Next App",
  description: "View detailed information about our products.",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen text-sm overflow-y-scroll overflow-x-hidden">
      <Header />
      <div className="flex flex-1 justify-start items-start bg-[#effaf9]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
