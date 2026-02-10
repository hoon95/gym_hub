"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EQUIPMENT_CATEGORY_LABELS, type Equipment } from "@/types";
import { LOCATIONS } from "@/data/locations";
import {
  ArrowLeft,
  Dumbbell,
  Target,
  Ruler,
  Weight,
  MapPin,
} from "lucide-react";

interface EquipmentDetailProps {
  equipment: Equipment;
}

export function EquipmentDetail({ equipment }: EquipmentDetailProps) {
  const availableLocations = LOCATIONS.filter((loc) =>
    equipment.locations.includes(loc.id)
  );

  return (
    <div>
      <Link href="/equipment">
        <Button variant="ghost" size="sm" className="gap-1 mb-6">
          <ArrowLeft size={16} />
          기구 목록으로
        </Button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="aspect-square rounded-2xl bg-surface border border-border flex items-center justify-center">
          <Dumbbell size={120} className="text-border" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
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

          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {equipment.name}
          </h1>
          <p className="text-muted text-lg mb-6">{equipment.nameEn}</p>

          <p className="text-foreground/80 leading-relaxed mb-8">
            {equipment.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl bg-surface-light p-4 border border-border">
              <div className="flex items-center gap-2 text-brand mb-2">
                <Target size={18} />
                <span className="text-sm font-medium">타겟 근육</span>
              </div>
              <p className="text-sm text-foreground">
                {equipment.muscles.join(", ")}
              </p>
            </div>
            {equipment.specs.weight && (
              <div className="rounded-xl bg-surface-light p-4 border border-border">
                <div className="flex items-center gap-2 text-brand mb-2">
                  <Weight size={18} />
                  <span className="text-sm font-medium">무게</span>
                </div>
                <p className="text-sm text-foreground">
                  {equipment.specs.weight}
                </p>
              </div>
            )}
            {equipment.specs.size && (
              <div className="rounded-xl bg-surface-light p-4 border border-border">
                <div className="flex items-center gap-2 text-brand mb-2">
                  <Ruler size={18} />
                  <span className="text-sm font-medium">크기</span>
                </div>
                <p className="text-sm text-foreground">
                  {equipment.specs.size}
                </p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">사용법</h2>
            <div className="rounded-xl bg-surface-light p-5 border border-border">
              {equipment.howToUse.split("\n").map((line, i) => (
                <p key={i} className="text-sm text-foreground/80 leading-relaxed mb-1.5 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-brand" />
              이 기구가 있는 지점
            </h2>
            <div className="flex flex-wrap gap-2">
              {availableLocations.map((loc) => (
                <Link key={loc.id} href="/locations">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:border-brand hover:text-brand transition-colors"
                  >
                    {loc.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
