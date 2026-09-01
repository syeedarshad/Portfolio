import { useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import Badge from "@/components/Badge";
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

export default function GithubShowcase() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch(() => setFailed(true));
  }, []);

  return (
    <section id="github" className="section-pad">
      <div className="container-shell">
        <RevealOnScroll>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading
              eyebrow="GitHub"
              title="Repositories"
              description="Live from GitHub — update the username in GithubShowcase.tsx to point at your own profile."
            />
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2 !px-4 text-sm shrink-0"
            >
              View Profile <ArrowUpRight size={14} />
            </a>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {failed && (
            <p className="text-slate-400 text-sm col-span-full font-body">
              Couldn't load repositories right now. Check the GitHub profile directly.
            </p>
          )}

          {!failed && !repos &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card-base p-6 h-36 animate-pulse bg-white/[0.02]" />
            ))}

          {repos &&
            repos.map((repo, i) => (
              <RevealOnScroll key={repo.id} delay={i * 70}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base p-6 h-full flex flex-col justify-between hover:border-accent/25 hover:bg-bg-surface/90 group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-slate-100 font-medium text-sm group-hover:text-accent transition-colors font-display">
                        {repo.name}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="text-slate-500 group-hover:text-accent transition-colors"
                      />
                    </div>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-2 font-body">
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 text-slate-500 text-xs">
                    {repo.language && <Badge>{repo.language}</Badge>}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
}
