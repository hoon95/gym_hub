# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**짐허브 (GYMHUB)** is a fitness platform built with Next.js 16 (App Router), React 19, and TypeScript. Features include 3D hero effects (Three.js), equipment finder, 360° virtual gym tour, body age quiz, community, membership pricing, and gym location search.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

### Route Structure (Next.js App Router)

```
src/app/
├── page.tsx                # 메인 페이지 (3D 히어로, 기능카드, 통계, 커뮤니티 미리보기)
├── equipment/
│   ├── page.tsx            # 기구찾기 (필터, 검색, 그리드)
│   └── [id]/page.tsx       # 기구 상세
├── tour/page.tsx           # 360° 헬스장 가상투어
├── locations/page.tsx      # 지점찾기
├── community/page.tsx      # 커뮤니티 (WOD/Diet)
├── pricing/page.tsx        # 멤버십 가격
└── quiz/page.tsx           # 체력나이 자가진단
```

### Feature-Local Organization

Components are grouped by feature under `src/components/`:

```
components/
├── layout/     # Header, Footer, MobileNav
├── home/       # HeroScene (Three.js), HeroOverlay, FeatureCards, StatsCounter, CommunityPreview
├── equipment/  # EquipmentGrid, EquipmentCard, EquipmentFilter, EquipmentDetail
├── tour/       # PanoramaViewer, TourNavigation, TourInfoOverlay
└── ui/         # Button, Card, Badge
```

### Shared Code

- **`stores/`** - Zustand stores (`quiz-store.ts`, `community-store.ts`)
- **`data/`** - Mock data files (`equipment.ts`, `locations.ts`, `tour-scenes.ts`, `quiz-questions.ts`, `community.ts`, `pricing.ts`)
- **`types/`** - TypeScript definitions with barrel exports
- **`lib/utils.ts`** - `cn()` utility (clsx + tailwind-merge)

### State Management (Zustand)

Stores export hooks directly:
- `useQuizStore` - Quiz state (currentQuestion, progress, age, finalResult)
- `useCommunityStore` - Community tab toggle (activeTab, selectedIndex)

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **UI:** Tailwind CSS v4, Lucide icons
- **State:** Zustand v5
- **3D:** @react-three/fiber, @react-three/drei, Three.js
- **Animations:** Framer Motion
- **Data:** Frontend-only with mock data in `src/data/`, structured for future API integration

## Code Style Rules

**Package manager:** Always use pnpm

**Imports:** Always use public API imports (barrel files/`index.ts`). Path alias: `@/*` maps to `src/`. When a directory has an `index.ts`, import from the directory rather than individual files.

```typescript
import { Button, Card, Badge } from "@/components/ui";
import { useQuizStore } from "@/stores/quiz-store";
import { EQUIPMENT_DATA } from "@/data/equipment";
import { cn } from "@/lib/utils";
import type { Equipment, EquipmentCategory } from "@/types";
```

**Styling:** Always use Tailwind CSS utility classes. Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for conditional classes. Inline styles only for truly dynamic values (calculated positions, API-provided colors). Dark theme by default (`bg-background`, `text-foreground`). Brand color: `text-brand` / `bg-brand`.

**Constants:** Extract hardcoded data outside components using SCREAMING_SNAKE_CASE. Applies to: navigation items, feature cards, quiz questions, equipment data, pricing plans.

**Components:** Use `'use client'` directive only for interactive components. Keep server components as default. Group by feature, not by code type. Each feature directory has an `index.ts` barrel export.

**3D / Client-Only:** Three.js components (`HeroScene`) must use `'use client'` and be loaded via `next/dynamic` with `{ ssr: false }` from a client component wrapper (not from a server component directly).

**Readability patterns:**
- Name magic numbers with constants (e.g., `ANIMATION_DELAY_MS = 300`)
- Abstract interaction logic into dedicated components
- Separate conditional UI into distinct components by role/state
- Replace complex ternaries with IIFE + if/else
- Name complex boolean conditions (e.g., `const isPriceInRange = ...`)

**Predictability:**
- Standardize return types for similar functions
- Avoid hidden side effects in functions

**Cohesion:**
- Organize by feature/domain, not by code type
- Co-locate related components, data, and stores

**Coupling:**
- Avoid premature abstraction; prefer some duplication over forced coupling
- Break broad state hooks into focused, single-purpose hooks
- Use component composition to eliminate props drilling
