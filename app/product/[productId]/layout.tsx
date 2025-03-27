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
    <div className="flex flex-col  max-w-[100vw] w-[100vw] min-h-[100vh] max-h-[100vh] h-auto text-sm overflow-y-scroll overflow-x-hidden">
      <div className="border-b bg-white border-gray-300 sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-col flex-1 justify-start items-start bg-white">
        {children}
      </div>
      <Footer />
    </div>
  );
}
