"use server";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import { SignInButton, UserButton, SignUpButton } from "@clerk/nextjs";

const HeaderButtons = async () => {
  const user = await currentUser();
  return (
    <div className=" z-50 flex flex-row gap-5 ">
      <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
        {!user && (
          <SignInButton>
            <Button size="sm" variant="outline">
              Login
            </Button>
          </SignInButton>
        )}
      </div>
      <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
        {!user && (
          <SignUpButton>
            <Button size="sm" variant="primary">
              Crear cuenta
            </Button>
          </SignUpButton>
        )}
      </div>
      {!!user && (
        <div className="flex items-center gap-x-4 ">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Transmisiones</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default HeaderButtons;
