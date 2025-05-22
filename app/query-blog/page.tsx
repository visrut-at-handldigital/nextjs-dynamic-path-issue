"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Hello {slug}
    </div>
  );
}
