import { FileWarningIcon } from "lucide-react";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <FileWarningIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
