import { CallList } from "../_components/call-list";

const Recordings = () => {
  return (
    <section className="p-12 flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
