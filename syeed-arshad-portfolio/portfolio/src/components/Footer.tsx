import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-8">
      <div className="container-shell flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-body">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
        <p>Designed and engineered from scratch.</p>
      </div>
    </footer>
  );
}
