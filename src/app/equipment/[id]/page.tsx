import { notFound } from "next/navigation";
import { EQUIPMENT_DATA } from "@/data/equipment";
import { EquipmentDetail } from "@/components/equipment/EquipmentDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return EQUIPMENT_DATA.map((eq) => ({ id: eq.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const equipment = EQUIPMENT_DATA.find((eq) => eq.id === id);
  if (!equipment) return { title: "기구를 찾을 수 없습니다 | GYMHUB" };
  return {
    title: `${equipment.name} | GYMHUB 기구찾기`,
    description: equipment.description,
  };
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { id } = await params;
  const equipment = EQUIPMENT_DATA.find((eq) => eq.id === id);

  if (!equipment) notFound();

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <EquipmentDetail equipment={equipment} />
      </div>
    </div>
  );
}
