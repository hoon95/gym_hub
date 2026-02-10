"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, Dumbbell, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EQUIPMENT_CATEGORY_LABELS, type Equipment } from "@/types";

interface TourInfoOverlayProps {
  equipment: Equipment;
  onClose: () => void;
}

export function TourInfoOverlay({ equipment, onClose }: TourInfoOverlayProps) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background/95 backdrop-blur-xl border-l border-border z-30 overflow-y-auto"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="brand">
            {EQUIPMENT_CATEGORY_LABELS[equipment.category]}
          </Badge>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-surface-light rounded-lg transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="w-full aspect-square rounded-xl bg-surface-light border border-border flex items-center justify-center mb-4">
          <Dumbbell size={48} className="text-border" />
        </div>

        <h3 className="text-xl font-bold mb-1">{equipment.name}</h3>
        <p className="text-sm text-muted mb-4">{equipment.nameEn}</p>

        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          {equipment.description}
        </p>

        <div className="mb-4">
          <p className="text-xs text-muted mb-1.5">타겟 근육</p>
          <div className="flex flex-wrap gap-1.5">
            {equipment.muscles.map((muscle) => (
              <Badge key={muscle} variant="outline">
                {muscle}
              </Badge>
            ))}
          </div>
        </div>

        <Link href={`/equipment/${equipment.id}`}>
          <Button className="w-full gap-2" size="sm">
            상세보기
            <ExternalLink size={14} />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
