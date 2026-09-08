import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { social } from "@/data/social";
import { Star, GitFork, ArrowUpRight } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const GITHUB_USERNAME = "syeedarshad";
const EXCLUDED_REPOS = ["syeedarshad", "calculator"];

export default function GithubShowcase() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data
            .filter((repo: Repo) => !EXCLUDED_REPOS.includes(repo.name.toLowerCase()))
            .slice(0, 6);
          setRepos(filtered);
        } else {
          setRepos([]);
        }
      })
      .catch(() => setFailed(true));
  }, []);

  return (
    <section id="github" className="section-pad border-b border-border">
      <div className="container-shell">
        <RevealOnScroll>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading
              number="07"
              eyebrow="OPEN SOURCE"
              title="Code &amp; repositories."
              description="Live repositories and public software systems on GitHub."
            />
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-xs font-mono shrink-0"
            >
              All Repositories <ArrowUpRight size={14} />
            </a>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {failed && (
            <p className="text-text-secondary text-sm col-span-full font-body">
              Couldn't load repositories right now. Check the GitHub profile directly.
            </p>
          )}

          {!failed && !repos &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-bg-surface border border-border rounded-lg p-6 h-36 animate-pulse" />
            ))}

          {repos &&
            repos.map((repo, i) => (
              <RevealOnScroll key={repo.id} delay={i * 50}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-surface border border-border rounded-lg p-6 h-full flex flex-col justify-between hover:border-border-hover hover:bg-bg-elevated/40 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-text-primary font-medium text-sm font-display group-hover:text-accent transition-colors truncate">
                        {repo.name}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted group-hover:text-accent transition-colors shrink-0"
                      />
                    </div>
                    <p className="text-text-secondary text-xs mt-2.5 leading-relaxed line-clamp-2 font-body">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-text-muted text-xs font-mono">
                    {repo.language ? (
                      <span className="flex items-center gap-1.5 text-text-secondary">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    ) : (
                      <span />
                    )}
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
}
