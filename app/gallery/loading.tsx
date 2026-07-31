import { GlassPanel } from "@/components/ui/GlassPanel";

export default function GalleryLoading() {
  return (
    <div className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="h-4 w-24 mx-auto glass-shimmer rounded mb-3" />
          <div className="h-12 w-48 mx-auto glass-shimmer rounded" />
        </div>
        <div className="h-10 w-96 max-w-full mx-auto glass-shimmer rounded-full mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <GlassPanel key={i} className="overflow-hidden">
              <div className="aspect-[4/5] glass-shimmer" />
              <div className="p-5 space-y-3">
                <div className="h-3 w-16 glass-shimmer rounded" />
                <div className="h-6 w-3/4 glass-shimmer rounded" />
                <div className="h-4 w-20 glass-shimmer rounded" />
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
