"use client";

import { cn } from "@/lib/utils";
import type { EquipmentCategory } from "@/types";
import { EQUIPMENT_CATEGORY_LABELS } from "@/types";

interface EquipmentFilterProps {
  selected: EquipmentCategory | "all";
  onSelect: (category: EquipmentCategory | "all") => void;
}

export function EquipmentFilter({ selected, onSelect }: EquipmentFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("all")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
          selected === "all"
            ? "bg-brand text-white"
            : "bg-surface-light text-muted hover:text-foreground hover:bg-border"
        )}
      >
        전체
      </button>
      {Object.entries(EQUIPMENT_CATEGORY_LABELS).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onSelect(key as EquipmentCategory)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
            selected === key
              ? "bg-brand text-white"
              : "bg-surface-light text-muted hover:text-foreground hover:bg-border"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
