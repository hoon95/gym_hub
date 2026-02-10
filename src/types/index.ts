export interface Equipment {
  id: string;
  name: string;
  nameEn: string;
  category: EquipmentCategory;
  image: string;
  muscles: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  howToUse: string;
  specs: {
    weight?: string;
    size?: string;
  };
  locations: string[];
}

export type EquipmentCategory =
  | "cardio"
  | "strength"
  | "freeweight"
  | "stretching";

export const EQUIPMENT_CATEGORY_LABELS: Record<EquipmentCategory, string> = {
  cardio: "유산소",
  strength: "근력 머신",
  freeweight: "프리웨이트",
  stretching: "스트레칭",
};

export interface GymLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  schedule: {
    weekday: string;
    weekend: string;
  };
  image: string;
}

export interface TourScene {
  id: string;
  name: string;
  panoramaUrl: string;
  defaultView: { pitch: number; yaw: number; hfov: number };
  hotspots: TourHotspot[];
  links: TourLink[];
}

export interface TourHotspot {
  id: string;
  pitch: number;
  yaw: number;
  equipmentId: string;
  label: string;
}

export interface TourLink {
  targetSceneId: string;
  pitch: number;
  yaw: number;
  label: string;
}

export interface CommunityPost {
  avatar: string;
  image: string;
  title: string;
  author: string;
  age: number;
  content: string;
}

export interface QuizQuestion {
  question: string;
  answers: { text: string; weight: number }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}
