"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TOUR_SCENES } from "@/data/tour-scenes";
import { EQUIPMENT_DATA } from "@/data/equipment";
import { TourNavigation } from "./TourNavigation";
import { TourInfoOverlay } from "./TourInfoOverlay";
import {
  Move3d,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Navigation,
} from "lucide-react";
import type { TourScene, Equipment } from "@/types";

interface PanoramaViewerProps {
  locationId: string;
}

export function PanoramaViewer({ locationId }: PanoramaViewerProps) {
  const scenes = TOUR_SCENES[locationId] || [];
  const [currentSceneId, setCurrentSceneId] = useState(scenes[0]?.id || "");
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null
  );
  const [viewAngle, setViewAngle] = useState({ yaw: 0, pitch: 0 });

  const currentScene = scenes.find((s) => s.id === currentSceneId);

  if (!currentScene) {
    return (
      <div className="text-center py-20 text-muted">
        이 지점의 투어 데이터가 없습니다.
      </div>
    );
  }

  const handleHotspotClick = (equipmentId: string) => {
    const eq = EQUIPMENT_DATA.find((e) => e.id === equipmentId);
    if (eq) setSelectedEquipment(eq);
  };

  const handleNavigate = (targetSceneId: string) => {
    setCurrentSceneId(targetSceneId);
    setViewAngle({ yaw: 0, pitch: 0 });
    setSelectedEquipment(null);
  };

  const rotate = (dy: number, dp: number) => {
    setViewAngle((prev) => ({
      yaw: (prev.yaw + dy) % 360,
      pitch: Math.max(-45, Math.min(45, prev.pitch + dp)),
    }));
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-surface-light">
      {/* 360 Panorama simulation */}
      <div className="relative aspect-[16/9] overflow-hidden select-none">
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{
            transform: `perspective(800px) rotateY(${viewAngle.yaw}deg) rotateX(${-viewAngle.pitch}deg)`,
          }}
        >
          {/* Simulated panoramic view */}
          <div className="absolute inset-0 bg-linear-to-b from-neutral-800 to-neutral-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Move3d size={64} className="mx-auto mb-4 text-brand/40" />
                <p className="text-2xl font-bold text-foreground/60">
                  {currentScene.name}
                </p>
                <p className="text-sm text-muted mt-2">
                  360° 파노라마 뷰
                </p>
              </div>
            </div>

            {/* Grid overlay for spatial reference */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,179,74,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,179,74,0.3) 1px, transparent 1px)",
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Hotspot markers */}
        {currentScene.hotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            onClick={() => handleHotspotClick(hotspot.equipmentId)}
            className="absolute z-10 group cursor-pointer"
            style={{
              left: `${((hotspot.yaw + 180) % 360) / 3.6}%`,
              top: `${50 - hotspot.pitch}%`,
            }}
          >
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-brand animate-pulse shadow-lg shadow-brand/50" />
              <span className="hidden group-hover:block text-xs bg-background/90 text-foreground px-2 py-1 rounded whitespace-nowrap">
                {hotspot.label}
              </span>
            </span>
          </button>
        ))}

        {/* Navigation links */}
        {currentScene.links.map((link) => (
          <button
            key={link.targetSceneId}
            onClick={() => handleNavigate(link.targetSceneId)}
            className="absolute z-10 group cursor-pointer"
            style={{
              left: `${((link.yaw + 180) % 360) / 3.6}%`,
              top: `${50 - link.pitch}%`,
            }}
          >
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-brand/30 transition-colors">
                <Navigation size={14} className="text-white" />
              </span>
              <span className="hidden group-hover:block text-xs bg-background/90 text-foreground px-2 py-1 rounded whitespace-nowrap">
                {link.label}
              </span>
            </span>
          </button>
        ))}

        {/* View controls */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1">
          <div className="flex flex-col items-center gap-1 bg-background/80 backdrop-blur-sm rounded-xl p-2 border border-border">
            <button
              onClick={() => rotate(0, 10)}
              className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground"
            >
              <ChevronUp size={16} />
            </button>
            <div className="flex gap-1">
              <button
                onClick={() => rotate(-30, 0)}
                className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setViewAngle({ yaw: 0, pitch: 0 })}
                className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => rotate(30, 0)}
                className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <button
              onClick={() => rotate(0, -10)}
              className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground"
            >
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="flex gap-1 bg-background/80 backdrop-blur-sm rounded-xl p-2 border border-border">
            <button className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground">
              <ZoomIn size={16} />
            </button>
            <button className="p-1.5 hover:bg-surface-light rounded-lg transition-colors text-foreground/70 hover:text-foreground">
              <ZoomOut size={16} />
            </button>
          </div>
        </div>

        {/* Scene label */}
        <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-border">
          <span className="text-sm font-medium">{currentScene.name}</span>
        </div>
      </div>

      {/* Tour navigation thumbnails */}
      <TourNavigation
        scenes={scenes}
        currentSceneId={currentSceneId}
        onNavigate={handleNavigate}
      />

      {/* Equipment info overlay */}
      <AnimatePresence>
        {selectedEquipment && (
          <TourInfoOverlay
            equipment={selectedEquipment}
            onClose={() => setSelectedEquipment(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
