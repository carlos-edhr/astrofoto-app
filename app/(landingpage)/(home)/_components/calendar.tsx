export default function Calendar() {
  const days = [10, 11, 12, 13, 14];

  return (
    <div className="bg-[#191919] text-white p-8 font-bebas flex flex-col items-center justify-center">
      <h2 className=" text-5xl  font-bold mb-4">JUNIO</h2>
      <div className="flex gap-2">
        {days.map((day) => (
          <div
            key={day}
            className="md:w-24 md:h-24 w-16 h-16 text-4xl md:text-6xl border-4 border-white flex items-center justify-center  font-medium p-8"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
