import Footer from "@/components/Site/Layout/Footer";
import Header from "@/components/Site/Layout/Header/Header";


export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}