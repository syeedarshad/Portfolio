import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-[#0E1116]">
      <div className="container-shell flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          <p>&copy; {new Date().getFullYear()} {profile.name} &middot; Chennai, India</p>
        </div>
        <p className="text-text-muted/80">Systems &middot; AI Infrastructure &middot; Web Engineering</p>
      </div>
    </footer>
  );
}
