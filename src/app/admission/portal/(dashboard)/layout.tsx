"use client"

import { fetchCurrentUser } from "@/api/apiEndpoints";
import Header from "@/components/Admission/Portal/Dashboard/Header";
import Sidebar from "@/components/Admission/Portal/Dashboard/Sidebar";
import { useAuthStore } from "@/stores/useAuthStore";
import { useSidebarStore } from "@/stores/useSidebarStore";
import { useQuery } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

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
    if (data) {
     setUser(data);
    }

  }, [ data ])


  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <img src="/logo.png" alt="" className="h-20" />
        <div className="">
          <LoaderIcon className="size-6 animate-spin text-primary" />
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
      toast.error("Please login to continue")
      router.push("/admission/portal/login");
  }

  if (isAuthenticated) return (
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
