const ConferenciaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
      <div className="w-full">{children}</div>
    </div>
  );
};
export default ConferenciaLayout;
