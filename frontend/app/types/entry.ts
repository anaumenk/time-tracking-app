export const PROJECTS = [
  "Viso Internal",
  "Client A",
  "Client B",
  "Personal Development",
] as const;

export type Project = typeof PROJECTS[number];

export interface TimeEntry {
  id: string;
  date: string;
  project: Project;
  hours: number;
  description: string;
}
