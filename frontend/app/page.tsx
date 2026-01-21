"use client";

import { TimeEntryForm } from "./components/TimeEntryForm";
import { EntryList } from "./components/EntryList";
import { useState } from "react";

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[var(--background)] text-[var(--foreground)] py-10 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Mini Time Tracker</h1>

        <div className="mb-8">
          <TimeEntryForm onSaved={() => setRefreshKey(prev => prev + 1)} />
        </div>

        <EntryList key={refreshKey} />
      </div>
    </div>

  );
}
