"use client";

import { useState, FormEvent } from "react";
import { Project, TimeEntry, PROJECTS } from "../types/entry";
import { api } from "../services/api";

interface Props {
  onSaved: (entry: TimeEntry) => void;
}

export const TimeEntryForm = ({ onSaved }: Props) => {
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [project, setProject] = useState<Project>(PROJECTS[0]);
  const [hours, setHours] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!hours || hours <= 0) {
      setError("Hours must be greater than 0");
      return;
    }
    if (!description) {
      setError("Description is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const newEntry = await api.createEntry({ date, project, hours, description });
      onSaved(newEntry);
      setHours(0);
      setDescription("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <input
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Project:</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          value={project}
          onChange={(e) => setProject(e.target.value as Project)}
        >
          {PROJECTS.map((project) => (
            <option key={project} value={project}>
              {project}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hours:</label>
        <input
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          type="number"
          min={0.1}
          step={0.1}
          value={isNaN(hours) ? "" : hours}
          onChange={(e) => setHours(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-40 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};
