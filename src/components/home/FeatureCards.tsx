"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, View, HeartPulse } from "lucide-react";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "기구찾기",
    description: "16종 이상의 헬스 기구를 카테고리별로 찾아보고, 사용법과 타겟 근육을 확인하세요.",
    href: "/equipment",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    icon: View,
    title: "360° 헬스장 투어",
    description: "실제 헬스장을 360도 가상 투어로 둘러보세요. 기구 위치와 시설을 미리 확인할 수 있습니다.",
    href: "/tour",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: HeartPulse,
    title: "체력나이 진단",
    description: "간단한 5가지 질문으로 나의 체력나이를 알아보세요. 건강한 생활 습관의 첫걸음입니다.",
    href: "/quiz",
    color: "from-purple-500/20 to-purple-600/5",
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            짐허브의 <span className="text-brand">핵심 서비스</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            피트니스의 모든 것을 한 곳에서 경험하세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link href={feature.href}>
                <div className="group relative rounded-2xl border border-border bg-surface p-8 h-full transition-all duration-300 hover:border-brand/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors">
                      <feature.icon size={24} className="text-brand" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
