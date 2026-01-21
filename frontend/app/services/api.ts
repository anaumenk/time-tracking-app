import { TimeEntry } from "../types/entry";

const API_URL = "http://localhost:3001/entries";

export const api = {
  getEntries: async (): Promise<TimeEntry[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch entries");
    return res.json();
  },

  createEntry: async (entry: Omit<TimeEntry, "id">): Promise<TimeEntry> => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    if (!res.ok) {
      const errorData = await res.json();

      const message =
        Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Unknown error";

      throw new Error(message);
    }
    return res.json();
  },
};
