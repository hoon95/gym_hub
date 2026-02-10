"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { EQUIPMENT_DATA } from "@/data/equipment";
import type { EquipmentCategory } from "@/types";
import { EquipmentFilter } from "./EquipmentFilter";
import { EquipmentCard } from "./EquipmentCard";

export function EquipmentGrid() {
  const [category, setCategory] = useState<EquipmentCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return EQUIPMENT_DATA.filter((eq) => {
      const matchCategory = category === "all" || eq.category === category;
      const matchQuery =
        query === "" ||
        eq.name.includes(query) ||
        eq.nameEn.toLowerCase().includes(query.toLowerCase()) ||
        eq.muscles.some((m) => m.includes(query));
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            placeholder="기구명 또는 근육 부위로 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-brand/50 transition-colors"
          />
        </div>
      </div>

      <EquipmentFilter selected={category} onSelect={setCategory} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((eq, i) => (
          <EquipmentCard key={eq.id} equipment={eq} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">
          <p className="text-lg">검색 결과가 없습니다</p>
          <p className="text-sm mt-2">다른 키워드로 검색해보세요</p>
        </div>
      )}
    </div>
  );
}
