import type { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 49000,
    period: "월",
    features: [
      "헬스장 자유 이용",
      "락커 이용",
      "기구 사용 가이드",
      "체성분 측정 월 1회",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 79000,
    period: "월",
    popular: true,
    features: [
      "Basic 전체 혜택",
      "PT 월 4회 포함",
      "그룹 클래스 참여",
      "체성분 측정 무제한",
      "운동복 대여",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 129000,
    period: "월",
    features: [
      "Standard 전체 혜택",
      "PT 월 8회 포함",
      "개인 락커 배정",
      "영양 상담 월 2회",
      "전 지점 이용 가능",
      "주차 무료",
    ],
  },
];
