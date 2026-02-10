import type { TourScene } from "@/types";

export const TOUR_SCENES: Record<string, TourScene[]> = {
  bongcheon: [
    {
      id: "entrance",
      name: "입구",
      panoramaUrl: "/images/tour/placeholder-entrance.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [],
      links: [
        {
          targetSceneId: "cardio-zone",
          pitch: -5,
          yaw: 90,
          label: "유산소존으로 이동",
        },
      ],
    },
    {
      id: "cardio-zone",
      name: "유산소존",
      panoramaUrl: "/images/tour/placeholder-cardio.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [
        {
          id: "h1",
          pitch: -10,
          yaw: 30,
          equipmentId: "treadmill",
          label: "트레드밀",
        },
        {
          id: "h2",
          pitch: -10,
          yaw: 120,
          equipmentId: "elliptical",
          label: "일립티컬",
        },
        {
          id: "h3",
          pitch: -10,
          yaw: 210,
          equipmentId: "stationary-bike",
          label: "스피닝 바이크",
        },
      ],
      links: [
        {
          targetSceneId: "entrance",
          pitch: -5,
          yaw: -90,
          label: "입구로 이동",
        },
        {
          targetSceneId: "weight-zone",
          pitch: -5,
          yaw: 90,
          label: "웨이트존으로 이동",
        },
      ],
    },
    {
      id: "weight-zone",
      name: "웨이트존",
      panoramaUrl: "/images/tour/placeholder-weight.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [
        {
          id: "h4",
          pitch: -10,
          yaw: 45,
          equipmentId: "lat-pulldown",
          label: "랫 풀다운",
        },
        {
          id: "h5",
          pitch: -10,
          yaw: 135,
          equipmentId: "chest-press",
          label: "체스트 프레스",
        },
        {
          id: "h6",
          pitch: -10,
          yaw: 225,
          equipmentId: "leg-press",
          label: "레그 프레스",
        },
      ],
      links: [
        {
          targetSceneId: "cardio-zone",
          pitch: -5,
          yaw: -90,
          label: "유산소존으로 이동",
        },
        {
          targetSceneId: "freeweight-zone",
          pitch: -5,
          yaw: 90,
          label: "프리웨이트존으로 이동",
        },
      ],
    },
    {
      id: "freeweight-zone",
      name: "프리웨이트존",
      panoramaUrl: "/images/tour/placeholder-freeweight.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [
        {
          id: "h7",
          pitch: -10,
          yaw: 60,
          equipmentId: "barbell",
          label: "바벨",
        },
        {
          id: "h8",
          pitch: -10,
          yaw: 150,
          equipmentId: "dumbbell",
          label: "덤벨",
        },
        {
          id: "h9",
          pitch: -10,
          yaw: 240,
          equipmentId: "kettlebell",
          label: "케틀벨",
        },
      ],
      links: [
        {
          targetSceneId: "weight-zone",
          pitch: -5,
          yaw: -90,
          label: "웨이트존으로 이동",
        },
        {
          targetSceneId: "stretching-zone",
          pitch: -5,
          yaw: 90,
          label: "스트레칭존으로 이동",
        },
      ],
    },
    {
      id: "stretching-zone",
      name: "스트레칭존",
      panoramaUrl: "/images/tour/placeholder-stretching.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [
        {
          id: "h10",
          pitch: -10,
          yaw: 90,
          equipmentId: "foam-roller",
          label: "폼롤러",
        },
        {
          id: "h11",
          pitch: -10,
          yaw: 180,
          equipmentId: "yoga-mat",
          label: "요가 매트",
        },
      ],
      links: [
        {
          targetSceneId: "freeweight-zone",
          pitch: -5,
          yaw: -90,
          label: "프리웨이트존으로 이동",
        },
        {
          targetSceneId: "entrance",
          pitch: -5,
          yaw: 90,
          label: "입구로 이동",
        },
      ],
    },
  ],
  snu: [
    {
      id: "entrance",
      name: "입구",
      panoramaUrl: "/images/tour/placeholder-entrance.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [],
      links: [
        {
          targetSceneId: "main-floor",
          pitch: -5,
          yaw: 90,
          label: "메인 플로어로 이동",
        },
      ],
    },
    {
      id: "main-floor",
      name: "메인 플로어",
      panoramaUrl: "/images/tour/placeholder-weight.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [
        {
          id: "h1",
          pitch: -10,
          yaw: 45,
          equipmentId: "smith-machine",
          label: "스미스 머신",
        },
        {
          id: "h2",
          pitch: -10,
          yaw: 135,
          equipmentId: "cable-machine",
          label: "케이블 머신",
        },
      ],
      links: [
        {
          targetSceneId: "entrance",
          pitch: -5,
          yaw: -90,
          label: "입구로 이동",
        },
      ],
    },
  ],
  sillim: [
    {
      id: "entrance",
      name: "입구",
      panoramaUrl: "/images/tour/placeholder-entrance.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [],
      links: [
        {
          targetSceneId: "training-area",
          pitch: -5,
          yaw: 90,
          label: "트레이닝 구역으로 이동",
        },
      ],
    },
    {
      id: "training-area",
      name: "트레이닝 구역",
      panoramaUrl: "/images/tour/placeholder-freeweight.jpg",
      defaultView: { pitch: 0, yaw: 0, hfov: 100 },
      hotspots: [
        {
          id: "h1",
          pitch: -10,
          yaw: 60,
          equipmentId: "rowing-machine",
          label: "로잉 머신",
        },
        {
          id: "h2",
          pitch: -10,
          yaw: 180,
          equipmentId: "kettlebell",
          label: "케틀벨",
        },
      ],
      links: [
        {
          targetSceneId: "entrance",
          pitch: -5,
          yaw: -90,
          label: "입구로 이동",
        },
      ],
    },
  ],
};
