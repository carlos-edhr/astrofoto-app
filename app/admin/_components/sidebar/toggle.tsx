"use client";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCurrentUser } from "@/hooks/use-current-user";
import { getUserById } from "@/lib/user-service";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expandir" : "Colapsar";

  const user = useCurrentUser();
  const username = user?.username;

  return (
    <>
      {collapsed && (
        <div className="block lg:hidden   w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
              <ArrowRightFromLine className="h-4 w-" />
            </Button>
          </Hint>
        </div>
      )}

      {!collapsed && (
        <div className="p-3 pl-6 mb-6 flex items-center w-full ">
          <p className="font-semibold text-primary">¡Bienvenido {username}! </p>
          <Hint label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              className="block lg:hidden h-auto p-2 ml-auto"
              variant="ghost"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
  );
};
