"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Hello {slug}
    </div>
  );
}
