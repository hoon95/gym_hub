import type { GymLocation } from "@/types";

export const LOCATIONS: GymLocation[] = [
  {
    id: "bongcheon",
    name: "짐허브 봉천",
    address: "서울시 관악구 봉천동 12-34 | 승리빌딩 3층",
    phone: "02-000-0000",
    schedule: {
      weekday: "00:00 ~ 24:00",
      weekend: "06:00 ~ 21:00",
    },
    image: "/images/search/center_1.png",
  },
  {
    id: "snu",
    name: "짐허브 서울대입구",
    address: "서울시 관악구 서울대입구",
    phone: "02-111-1111",
    schedule: {
      weekday: "07:00 ~ 23:00",
      weekend: "08:00 ~ 22:00",
    },
    image: "/images/search/center_2.png",
  },
  {
    id: "sillim",
    name: "짐허브 신림",
    address: "서울시 관악구 신림동 56-78 | 희망빌딩 2층",
    phone: "02-222-2222",
    schedule: {
      weekday: "06:00 ~ 23:00",
      weekend: "07:00 ~ 21:00",
    },
    image: "/images/search/center_3.png",
  },
];
