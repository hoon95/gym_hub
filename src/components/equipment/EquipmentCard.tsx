"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { EQUIPMENT_CATEGORY_LABELS, type Equipment } from "@/types";
import { Dumbbell } from "lucide-react";

interface EquipmentCardProps {
  equipment: Equipment;
  index: number;
}

export function EquipmentCard({ equipment, index }: EquipmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/equipment/${equipment.id}`}>
        <div className="group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-brand/30 hover:-translate-y-1">
          <div className="aspect-square relative bg-surface-light flex items-center justify-center overflow-hidden">
            <Dumbbell
              size={64}
              className="text-border group-hover:text-brand/30 transition-colors duration-300"
            />
            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-300" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="brand">
                {EQUIPMENT_CATEGORY_LABELS[equipment.category]}
              </Badge>
              <Badge>
                {equipment.difficulty === "beginner"
                  ? "초급"
                  : equipment.difficulty === "intermediate"
                    ? "중급"
                    : "고급"}
              </Badge>
            </div>
            <h3 className="font-semibold text-lg">{equipment.name}</h3>
            <p className="text-sm text-muted mt-1">
              {equipment.muscles.slice(0, 3).join(" · ")}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
