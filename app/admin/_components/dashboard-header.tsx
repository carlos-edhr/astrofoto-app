import { Separator } from "@/components/ui/separator";

interface DashboardHeaderProps {
  className?: string;
  title: string;
  subtitle?: string;
}
const DashboardHeader = ({
  className,
  title,
  subtitle,
}: DashboardHeaderProps) => {
  return (
    <header className="font-robotoCondensed font-extralight container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Separator className="w-full h-[1px] bg-slate-400" />
        <div className="flex items-center w-full max-w-2xl">
          <div className="px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              {title}
            </h1>
            <p className="font-roboto text-muted-foreground mt-5">{subtitle}</p>
          </div>
        </div>
        <Separator className="w-full  h-[1px] bg-slate-400" />
      </div>
    </header>
  );
};

export default DashboardHeader;
