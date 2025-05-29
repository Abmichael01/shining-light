// app/dashboard/components/Header.tsx
import LogoutButton from "@/components/General/LogoutButton";
import { useSidebarStore } from "@/stores/useSidebarStore";



export default function Header() {
  const { isOpen, toggle } = useSidebarStore();
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white border rounded-xl">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 cursor-pointer rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggle}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <h2 className="">Welcome</h2>
      <div className="flex items-center gap-3">
        <div className="flex justify-center size-[40px] font-bold text-lg rounded-full text-white bg-primary items-center gap-2">
          J
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}
