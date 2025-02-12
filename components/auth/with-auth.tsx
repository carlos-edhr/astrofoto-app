"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuth(Component: any) {
  return function ProtectedRoute(props: any) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/auth/signin");
      }
    }, [status, router]);

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}
