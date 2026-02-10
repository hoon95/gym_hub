"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LOCATIONS } from "@/data/locations";
import { PanoramaViewer } from "@/components/tour/PanoramaViewer";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

export default function TourPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            360° <span className="text-brand">헬스장 투어</span>
          </h1>
          <p className="mt-3 text-muted text-lg">
            헬스장 내부를 360도로 둘러보세요. 기구를 클릭하면 상세 정보를 확인할
            수 있습니다.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-sm font-medium text-muted mb-3">지점 선택</p>
          <div className="flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <motion.button
                key={loc.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLocation(loc.id)}
                className={cn(
                  "flex items-center gap-3 px-5 py-4 rounded-xl border transition-all cursor-pointer",
                  selectedLocation === loc.id
                    ? "border-brand bg-brand/10 text-foreground"
                    : "border-border bg-surface text-muted hover:border-brand/30 hover:text-foreground"
                )}
              >
                <MapPin
                  size={20}
                  className={
                    selectedLocation === loc.id ? "text-brand" : "text-muted"
                  }
                />
                <div className="text-left">
                  <p className="font-semibold text-sm">{loc.name}</p>
                  <p className="text-xs text-muted">{loc.address}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {selectedLocation ? (
          <motion.div
            key={selectedLocation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PanoramaViewer locationId={selectedLocation} />
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-border bg-surface flex items-center justify-center py-32">
            <div className="text-center text-muted">
              <MapPin size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">지점을 선택해주세요</p>
              <p className="text-sm mt-1">
                위의 지점 중 하나를 선택하면 360° 투어를 시작합니다
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
