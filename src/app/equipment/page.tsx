import { EquipmentGrid } from "@/components/equipment/EquipmentGrid";

export const metadata = {
  title: "기구찾기 | GYMHUB",
  description: "헬스 기구를 카테고리별로 찾아보고 사용법을 확인하세요.",
};

export default function EquipmentPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-brand">기구</span>찾기
          </h1>
          <p className="mt-3 text-muted text-lg">
            카테고리별 헬스 기구를 찾아보고, 사용법과 타겟 근육을 확인하세요
          </p>
        </div>
        <EquipmentGrid />
      </div>
    </div>
  );
}
