export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "studyflow-ai",
    name: "StudyFlow AI",
    tagline: "AI-Powered Student Productivity Platform",
    description:
      "A full-stack, cross-platform desktop productivity app (Electron + JavaScript, FastAPI backend, SQLite/PostgreSQL) covering task management, goal roadmaps, study planning, focus mode, exam prep, notes, analytics, wellness tracking, and an AI study coach. Includes a multi-provider AI management system, a responsive marketing site, and CI workflows with 240+ passing tests.",
    technologies: ["Electron", "React", "TypeScript", "FastAPI", "SQLite", "PostgreSQL"],
    image: "/assets/projects/vericlaim.jpg",
    githubUrl: "https://github.com/syeedarshad",
    featured: true,
  },
  {
    id: "jass-ai",
    name: "JASS AI",
    tagline: "AI-Powered Personal Assistant Platform",
    description:
      "A hybrid Retrieval-Augmented Generation pipeline combining FAISS dense vector search with BM25 sparse retrieval, query expansion, and context compression for long-term memory. Backed by a JWT-secured FastAPI backend with SQLAlchemy and WebSockets, plus a multi-provider LLM routing layer across Groq, Gemini, and Ollama with real-time voice input via Whisper.",
    technologies: ["Python", "FastAPI", "React", "FAISS", "RAG", "WebSockets"],
    image: "/assets/projects/mediai.jpg",
    githubUrl: "https://github.com/syeedarshad",
  },
  {
    id: "ai-email-assistant",
    name: "AI Email Assistant",
    tagline: "Automated Email Triage and Reply Drafting",
    description:
      "Automates email classification into 5 categories, summarization, priority scoring, and reply drafting using Gmail OAuth 2.0 and OpenRouter LLMs. Includes a human-in-the-loop decision layer routing personal/commitment emails through a Telegram approval workflow, with a Streamlit analytics dashboard and SQLite audit logging.",
    technologies: ["Python", "Gmail API", "OpenRouter", "Streamlit", "SQLite"],
    image: "/assets/projects/budget-tracker.jpg",
    githubUrl: "https://github.com/syeedarshad",
  },
];
