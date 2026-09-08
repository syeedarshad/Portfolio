export interface Profile {
  name: string;
  roles: string[];
  tagline: string;
  about: string[];
  education: string;
  profileImage: string;
  resumeUrl: string;
}

export const profile: Profile = {
  name: "Arshad Syeed",
  roles: ["AI Systems Developer", "Full-Stack Developer", "Software Engineer"],
  tagline:
    "Building AI-powered, full-stack software — RAG pipelines, multi-agent systems, and production-style backends in Python and React.",
  about: [
    "I'm a B.Tech Electronics and Communication Engineering student (CGPA 8.52/10, Class of 2027) actively preparing for software engineering roles in the tech industry.",
    "I build hands-on, AI-powered full-stack software — Retrieval-Augmented Generation (RAG) pipelines, multi-agent systems, REST APIs, and production-style backends using Python/FastAPI and React/TypeScript. I'm a Google AI Professional Certificate holder.",
    "Alongside software, I bring hands-on experience in signaling systems and hardware diagnostics from two engineering internships, giving me a practical grounding that spans both embedded systems and modern AI-driven applications.",
  ],
  education: "B.Tech in Electronics and Communication Engineering",
  profileImage: "/assets/projects/profile.jpeg",
  resumeUrl: "/attachments/resume.pdf",
};
