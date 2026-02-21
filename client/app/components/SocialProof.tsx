import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="px-10 pb-16">
      <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800 rounded-full px-6 py-3 w-fit">
        <div className="flex -space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=1"
            className="w-8 h-8 rounded-full border border-black"
          />
          <img
            src="https://i.pravatar.cc/40?img=2"
            className="w-8 h-8 rounded-full border border-black"
          />
          <img
            src="https://i.pravatar.cc/40?img=3"
            className="w-8 h-8 rounded-full border border-black"
          />
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 text-brand-orange" />
          <span>4.9/5</span>
          <span className="text-zinc-400">Helping startups build better</span>
        </div>
      </div>
    </section>
  );
}
