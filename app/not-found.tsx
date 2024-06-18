import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <p>No encontramos la página que buscas.</p>
      <Button variant="secondary" asChild>
        <Link href="/">Vuelve al Panel Principal</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
