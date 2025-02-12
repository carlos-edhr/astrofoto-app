// import Link from "next/link";
// import { Button } from "../ui/button";

import { signIn } from "@/auth";

// export const SignInButton = () => {
//   return (
//     <Button variant="primary" size="sm">
//       <Link href="/sign-in">Login</Link>
//     </Button>
//   );
// };

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Resend</button>
    </form>
  );
}
