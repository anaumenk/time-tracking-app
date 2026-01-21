import { TimeEntry } from "../types/entry";

interface Props {
  date: string;
  entries: TimeEntry[];
}

export const DayGroup = ({ date, entries }: Props) => {
  const totalHours = entries.reduce((sum, e) => sum + e.hours, 0);

  return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-4 mb-4">
      <div className="grid grid-cols-[2fr_1fr_3fr] gap-2 font-semibold border-b border-gray-300 pb-1 mb-2">
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
