"use client";

import { cn } from "@/lib/utils";
import type { TourScene } from "@/types";
import { MapPin } from "lucide-react";

interface TourNavigationProps {
  scenes: TourScene[];
  currentSceneId: string;
  onNavigate: (sceneId: string) => void;
}

export function TourNavigation({
  scenes,
  currentSceneId,
  onNavigate,
}: TourNavigationProps) {
  return (
    <div className="p-4 border-t border-border">
      <p className="text-xs text-muted mb-3 font-medium">구역 이동</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => onNavigate(scene.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer",
              currentSceneId === scene.id
                ? "bg-brand text-white"
                : "bg-surface-light text-muted hover:text-foreground hover:bg-border"
            )}
          >
            <MapPin size={14} />
            {scene.name}
          </button>
        ))}
      </div>
    </div>
  );
}
