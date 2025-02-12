"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <div className="p-4 bg-muted rounded-xl">
      <Button>
        <FcGoogle className="h-5 w-5 mr-2" />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default SignIn;
