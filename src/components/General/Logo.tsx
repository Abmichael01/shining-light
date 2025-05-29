import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <img
        src="/logo-white.png"
        alt="Shining Light logo"
        width={100}
        height={100}
        className="w-[200px]"
      />
    </Link>
  );
}
