"use client"

import { fetchCurrentUser } from "@/api/apiEndpoints";
import Header from "@/components/Admission/Portal/Dashboard/Header";
import Sidebar from "@/components/Admission/Portal/Dashboard/Sidebar";
import { useAuthStore } from "@/stores/useAuthStore";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, toggle } = useSidebarStore();
  const { setUser, isAuthenticated } = useAuthStore()
  const { data, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    
  })
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admission/portal/login");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [ data, setUser ])


  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!data) {
    router.push("/admission/portal/login");
    return null; // Prevent rendering the layout if user data is not available
  }

  return (
    <section className="flex h-screen bg-gray-50 relative overflow-y-auto">
      {/* Mobile sidebar */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => toggle()}
        />
      )}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-4 md:p-8 space-y-8 pb-24">
          <Header />
          <div className="mx-auto">{children}</div>
        </main>
      </div>
    </section>
  );
}
