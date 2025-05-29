import Footer from "@/components/Site/Layout/Footer";
import Header from "@/components/Site/Layout/Header/Header";
import React from "react";


export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </section>
  );
}