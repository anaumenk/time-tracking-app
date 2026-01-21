"use client";

import { useEffect, useState, useMemo } from "react";
import { TimeEntry } from "../types/entry";
import { api } from "../services/api";
import { DayGroup } from "./DayGroup";

export const EntryList = () => {
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getEntries()
      .then(setEntries)
      .finally(() => setLoading(false));
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, TimeEntry[]> = {};
    entries.forEach(e => {
      if (!map[e.date]) map[e.date] = [];
      map[e.date].push(e);
    });
    return map;
  }, [entries]);

  const grandTotal = useMemo(() => entries.reduce((sum, e) => sum + e.hours, 0), [entries]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([date, dayEntries]) => (
        <DayGroup key={date} date={date} entries={dayEntries} />
      ))}

      <h2 className="text-xl font-semibold text-right text-[var(--foreground)]">
        Grand total: {grandTotal}h
      </h2>
    </div>
  );
};
