export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Python", "JavaScript", "TypeScript", "C++"] },
  {
    category: "AI/ML",
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "Vector Databases",
      "FAISS",
      "BM25",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "Groq API",
      "Gemini",
      "Ollama",
      "OpenRouter",
    ],
  },
  {
    category: "Web & Backend",
    skills: ["FastAPI", "REST APIs", "API Development", "WebSockets", "React", "Node.js", "HTML", "CSS"],
  },
  { category: "Databases", skills: ["MySQL", "SQLite", "PostgreSQL", "SQLAlchemy"] },
  { category: "Auth & Security", skills: ["JWT", "OAuth 2.0"] },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "VS Code", "Arduino IDE", "LTspice", "Streamlit", "Electron"],
  },
];

export const exploring: string[] = ["Multi-Agent Systems", "RAG Pipelines", "LLM Routing"];

export interface BuildCategory {
  title: string;
  description: string;
}

export const whatIBuild: BuildCategory[] = [
  {
    title: "AI Systems",
    description: "RAG pipelines and multi-agent systems that turn language models into practical, production-ready software.",
  },
  {
    title: "Full-Stack Applications",
    description: "End-to-end products connecting FastAPI backends to React/TypeScript front ends.",
  },
  {
    title: "Automation Tools",
    description: "Workflow automation that combines LLMs with real-world approval and review loops.",
  },
  {
    title: "Embedded Systems",
    description: "Hardware-connected projects bridging code with sensors, signaling, and real-world devices.",
  },
];
