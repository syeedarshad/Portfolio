export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "South Central Railways",
    role: "Signals and Telecommunication Intern",
    period: "Jul 2025 – Sep 2025",
    description:
      "Analyzed fault-detection workflows and interlocking logic for a Network Failure Detection System across 4 operational departments, improving alert-generation reliability for safety-critical infrastructure. Audited real-time signaling and monitoring pipelines, identifying systemic gaps in live railway control architecture.",
  },
  {
    company: "Frontline Electronics Pvt. Ltd.",
    role: "Electronics Intern",
    period: "Jun 2025",
    description:
      "Diagnosed hardware faults in aviation warning lighting systems via PCB-level root-cause analysis; performed PCB fabrication, SMT inspection, and quality-control workflows.",
  },
];
