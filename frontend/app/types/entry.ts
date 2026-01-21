export type Project = "Onboarding" | "Client A" | "Client B" | "Personal Development";

export interface TimeEntry {
  id: string;
  date: string;
  project: Project;
  hours: number;
  description: string;
}
