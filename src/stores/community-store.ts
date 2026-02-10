"use client";

import { create } from "zustand";

type CommunityTab = "wod" | "diet";

interface CommunityState {
  activeTab: CommunityTab;
  selectedIndex: number;
  setActiveTab: (tab: CommunityTab) => void;
  setSelectedIndex: (index: number) => void;
}

export const useCommunityStore = create<CommunityState>((set) => ({
  activeTab: "wod",
  selectedIndex: 0,
  setActiveTab: (tab) => set({ activeTab: tab, selectedIndex: 0 }),
  setSelectedIndex: (index) => set({ selectedIndex: index }),
}));
