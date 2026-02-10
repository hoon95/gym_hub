"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eye, Activity } from "lucide-react";

export function HeroOverlay() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
          당신의{" "}
          <span className="text-brand">피트니스</span>
          <br />
          여정을 시작하세요
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-lg sm:text-xl text-muted max-w-2xl"
      >
        100가지 이상의 최신 기구, 360° 가상 투어, 맞춤 체력 진단까지.
        <br className="hidden sm:block" />
        짐허브가 당신의 건강한 변화를 함께합니다.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link href="/tour">
          <Button size="lg" className="gap-2">
            <Eye size={20} />
            헬스장 둘러보기
          </Button>
        </Link>
        <Link href="/quiz">
          <Button variant="outline" size="lg" className="gap-2">
            <Activity size={20} />
            체력나이 진단
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
