import { TimeEntry } from "../types/entry";

interface Props {
  date: string;
  entries: TimeEntry[];
}

export const DayGroup = ({ date, entries }: Props) => {
  const totalHours = entries.reduce((sum, e) => sum + e.hours, 0);
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-4 mb-4">
      <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-2">
        <h3 className="font-semibold">{formattedDate}</h3>
        <span className="text-gray-500 font-medium">{totalHours}h</span>
      </div>

      <div className="grid grid-cols-[2fr_1fr_3fr] gap-2 font-semibold pb-1 mb-0">
        <div>Project</div>
        <div className="text-center">Hours</div>
        <div>Description</div>
      </div>

      <div className="space-y-1">
        {entries.map((e) => (
          <div
            key={e.id}
            className="grid grid-cols-[2fr_1fr_3fr] gap-2"
          >
            <div className="truncate">{e.project}</div>
            <div className="text-center">{e.hours}h</div>
            <div className="truncate">{e.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
