import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center min-h-screen relative py-12 px-5">
      <img
        src="/hero2.jpg"
        alt=""
        className="fixed inset-0 size-full object-cover"
      />
      <main className="relative z-[2] bg-white/50 backdrop-blur-xl w-full min-[600px]:w-[500px] p-6 sm:p-10 rounded-xl flex flex-col gap-3 items-center">
        <img src="/logo.png" alt="shining light logo" className="w-20" />
        <h2 className="text-xl fancy-font text-primary font-semibold">
          Admission Portal
        </h2>
        <div className="w-full">{children}</div>
      </main>
    </section>
  );
}
