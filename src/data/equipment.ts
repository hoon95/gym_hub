import type { Equipment } from "@/types";

export const EQUIPMENT_DATA: Equipment[] = [
  {
    id: "treadmill",
    name: "트레드밀",
    nameEn: "Treadmill",
    category: "cardio",
    image: "/images/equipment/treadmill.svg",
    muscles: ["하체 전체", "심폐"],
    difficulty: "beginner",
    description:
      "실내에서 걷기와 달리기 운동이 가능한 유산소 기구입니다. 속도와 경사를 조절하여 다양한 강도의 운동을 할 수 있습니다.",
    howToUse:
      "1. 안전 클립을 옷에 부착합니다.\n2. 낮은 속도부터 시작합니다.\n3. 정면을 바라보며 자연스러운 자세로 걷거나 뜁니다.\n4. 운동 종료 시 서서히 속도를 줄입니다.",
    specs: { size: "200 x 90 x 150cm" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "elliptical",
    name: "일립티컬",
    nameEn: "Elliptical",
    category: "cardio",
    image: "/images/equipment/elliptical.svg",
    muscles: ["하체 전체", "코어", "심폐"],
    difficulty: "beginner",
    description:
      "관절에 부담 없이 전신 유산소 운동을 할 수 있는 기구입니다. 타원형 궤도를 그리며 자연스러운 움직임을 제공합니다.",
    howToUse:
      "1. 발판에 올라서서 핸들을 잡습니다.\n2. 천천히 페달을 밟으며 시작합니다.\n3. 저항을 조절하여 강도를 맞춥니다.",
    specs: { size: "180 x 70 x 170cm" },
    locations: ["bongcheon", "snu"],
  },
  {
    id: "stationary-bike",
    name: "스피닝 바이크",
    nameEn: "Stationary Bike",
    category: "cardio",
    image: "/images/equipment/bike.svg",
    muscles: ["대퇴사두", "햄스트링", "종아리", "심폐"],
    difficulty: "beginner",
    description:
      "고정식 자전거로 실내에서 사이클링 운동을 할 수 있습니다. 강도 높은 유산소 운동에 적합합니다.",
    howToUse:
      "1. 안장 높이를 골반 높이에 맞춥니다.\n2. 안장에 앉아 페달에 발을 고정합니다.\n3. 저항을 조절하며 페달을 밟습니다.",
    specs: { size: "120 x 55 x 120cm" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "rowing-machine",
    name: "로잉 머신",
    nameEn: "Rowing Machine",
    category: "cardio",
    image: "/images/equipment/rowing.svg",
    muscles: ["등", "팔", "코어", "하체", "심폐"],
    difficulty: "intermediate",
    description:
      "보트 젓기 동작을 재현한 전신 유산소 기구입니다. 상하체를 동시에 사용하여 높은 칼로리를 소모합니다.",
    howToUse:
      "1. 발판에 발을 고정합니다.\n2. 핸들을 잡고 등을 곧게 펴세요.\n3. 다리 → 허리 → 팔 순서로 당깁니다.\n4. 역순으로 돌아가며 반복합니다.",
    specs: { size: "240 x 60 x 90cm" },
    locations: ["bongcheon", "sillim"],
  },
  {
    id: "lat-pulldown",
    name: "랫 풀다운",
    nameEn: "Lat Pulldown",
    category: "strength",
    image: "/images/equipment/lat-pulldown.svg",
    muscles: ["광배근", "이두근", "전완근"],
    difficulty: "beginner",
    description:
      "넓은 등 근육(광배근)을 집중적으로 단련하는 머신입니다. 풀업이 어려운 분들에게 좋은 대안입니다.",
    howToUse:
      "1. 패드 아래에 허벅지를 고정합니다.\n2. 바를 어깨너비보다 넓게 잡습니다.\n3. 가슴 쪽으로 바를 당깁니다.\n4. 천천히 원래 위치로 돌아갑니다.",
    specs: { weight: "5~100kg" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "chest-press",
    name: "체스트 프레스",
    nameEn: "Chest Press Machine",
    category: "strength",
    image: "/images/equipment/chest-press.svg",
    muscles: ["대흉근", "삼두근", "전면 삼각근"],
    difficulty: "beginner",
    description:
      "가슴 근육을 안전하게 단련할 수 있는 머신입니다. 벤치프레스의 동작을 머신으로 재현합니다.",
    howToUse:
      "1. 등받이에 등을 붙이고 앉습니다.\n2. 핸들을 가슴 높이에서 잡습니다.\n3. 팔을 뻗으며 밀어냅니다.\n4. 천천히 원래 위치로 돌아갑니다.",
    specs: { weight: "5~120kg" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "leg-press",
    name: "레그 프레스",
    nameEn: "Leg Press",
    category: "strength",
    image: "/images/equipment/leg-press.svg",
    muscles: ["대퇴사두", "햄스트링", "둔근"],
    difficulty: "beginner",
    description:
      "하체 근력을 효과적으로 키울 수 있는 머신입니다. 스쿼트보다 허리 부담이 적습니다.",
    howToUse:
      "1. 등받이에 등을 붙이고 앉습니다.\n2. 발을 어깨너비로 발판에 올립니다.\n3. 무릎을 펴며 발판을 밀어냅니다.\n4. 무릎이 완전히 잠기지 않도록 주의합니다.",
    specs: { weight: "20~300kg" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "cable-machine",
    name: "케이블 머신",
    nameEn: "Cable Machine",
    category: "strength",
    image: "/images/equipment/cable.svg",
    muscles: ["전신"],
    difficulty: "intermediate",
    description:
      "케이블을 이용해 다양한 각도와 방향으로 운동할 수 있는 다목적 머신입니다. 수십 가지 운동이 가능합니다.",
    howToUse:
      "1. 원하는 높이에 풀리를 설정합니다.\n2. 적절한 핸들/바를 부착합니다.\n3. 안정된 자세에서 케이블을 당기거나 밀어냅니다.",
    specs: { weight: "5~90kg" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "smith-machine",
    name: "스미스 머신",
    nameEn: "Smith Machine",
    category: "strength",
    image: "/images/equipment/smith.svg",
    muscles: ["전신"],
    difficulty: "intermediate",
    description:
      "바벨이 가이드 레일을 따라 움직이는 머신입니다. 스쿼트, 벤치프레스 등을 안전하게 수행할 수 있습니다.",
    howToUse:
      "1. 바벨 높이를 조절합니다.\n2. 안전 스토퍼를 설정합니다.\n3. 바벨을 잡고 회전하여 잠금을 해제합니다.\n4. 운동 후 바벨을 회전하여 잠급니다.",
    specs: { weight: "바벨 20kg + 추가 플레이트" },
    locations: ["bongcheon", "snu"],
  },
  {
    id: "barbell",
    name: "바벨",
    nameEn: "Barbell",
    category: "freeweight",
    image: "/images/equipment/barbell.svg",
    muscles: ["전신"],
    difficulty: "intermediate",
    description:
      "프리웨이트 운동의 기본 도구입니다. 스쿼트, 데드리프트, 벤치프레스 등 3대 운동에 사용됩니다.",
    howToUse:
      "1. 적절한 무게의 플레이트를 끼웁니다.\n2. 클립으로 고정합니다.\n3. 올바른 자세로 운동을 수행합니다.\n4. 항상 안전바나 보조자를 확보하세요.",
    specs: { weight: "올림픽 바 20kg + 플레이트" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "dumbbell",
    name: "덤벨",
    nameEn: "Dumbbell",
    category: "freeweight",
    image: "/images/equipment/dumbbell.svg",
    muscles: ["전신"],
    difficulty: "beginner",
    description:
      "한 손에 하나씩 잡고 다양한 운동을 할 수 있는 프리웨이트 도구입니다. 자유로운 동작 범위로 근육 균형 발달에 효과적입니다.",
    howToUse:
      "1. 적절한 무게를 선택합니다.\n2. 양손에 하나씩 잡습니다.\n3. 안정된 자세에서 운동합니다.\n4. 운동 후 제자리에 돌려놓습니다.",
    specs: { weight: "1~50kg (세트)" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "kettlebell",
    name: "케틀벨",
    nameEn: "Kettlebell",
    category: "freeweight",
    image: "/images/equipment/kettlebell.svg",
    muscles: ["전신", "코어", "둔근"],
    difficulty: "intermediate",
    description:
      "손잡이가 달린 구형 웨이트로 스윙, 클린, 스내치 등 역동적인 전신 운동에 적합합니다.",
    howToUse:
      "1. 적절한 무게를 선택합니다.\n2. 양손 또는 한 손으로 핸들을 잡습니다.\n3. 힙 힌지 동작으로 스윙합니다.\n4. 코어에 항상 힘을 유지합니다.",
    specs: { weight: "4~32kg" },
    locations: ["bongcheon", "sillim"],
  },
  {
    id: "ez-bar",
    name: "이지바",
    nameEn: "EZ Curl Bar",
    category: "freeweight",
    image: "/images/equipment/ezbar.svg",
    muscles: ["이두근", "삼두근", "전완근"],
    difficulty: "beginner",
    description:
      "W자 형태의 바벨로 손목에 부담을 줄이면서 팔 근육 운동을 할 수 있습니다.",
    howToUse:
      "1. 적절한 무게의 플레이트를 끼웁니다.\n2. 곡선 부분을 잡습니다.\n3. 팔꿈치를 고정하고 컬 동작을 합니다.",
    specs: { weight: "바 5kg + 플레이트" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "foam-roller",
    name: "폼롤러",
    nameEn: "Foam Roller",
    category: "stretching",
    image: "/images/equipment/foam-roller.svg",
    muscles: ["전신 근막"],
    difficulty: "beginner",
    description:
      "근막 이완과 스트레칭에 사용하는 원통형 도구입니다. 운동 전후 근육 풀어주기에 효과적입니다.",
    howToUse:
      "1. 대상 근육 아래에 폼롤러를 놓습니다.\n2. 체중을 실어 천천히 롤링합니다.\n3. 통증이 있는 부위에서 10~30초 유지합니다.",
    specs: { size: "90 x 15cm" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "yoga-mat",
    name: "요가 매트",
    nameEn: "Yoga Mat",
    category: "stretching",
    image: "/images/equipment/yoga-mat.svg",
    muscles: ["전신"],
    difficulty: "beginner",
    description:
      "바닥 운동, 스트레칭, 요가 등에 사용하는 쿠션 매트입니다. 미끄럼 방지 기능으로 안전한 운동이 가능합니다.",
    howToUse:
      "1. 평평한 바닥에 매트를 깔아줍니다.\n2. 맨발로 올라갑니다.\n3. 원하는 스트레칭이나 운동을 수행합니다.",
    specs: { size: "183 x 61 x 0.6cm" },
    locations: ["bongcheon", "snu", "sillim"],
  },
  {
    id: "resistance-band",
    name: "저항 밴드",
    nameEn: "Resistance Band",
    category: "stretching",
    image: "/images/equipment/band.svg",
    muscles: ["전신"],
    difficulty: "beginner",
    description:
      "탄성을 이용한 저항 운동 도구입니다. 재활, 워밍업, 보조 운동 등 다양한 용도로 활용됩니다.",
    howToUse:
      "1. 강도에 맞는 밴드를 선택합니다.\n2. 고정점에 걸거나 손/발에 겁니다.\n3. 천천히 늘렸다 돌아가며 운동합니다.",
    specs: { size: "길이 120~200cm" },
    locations: ["bongcheon", "snu", "sillim"],
  },
];
