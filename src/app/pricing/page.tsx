"use client";

import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-brand">멤버십</span> 가격
          </h1>
          <p className="mt-3 text-muted text-lg">
            나에게 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "rounded-2xl border p-7 transition-all relative",
                plan.popular
                  ? "border-brand bg-brand/5 scale-[1.02]"
                  : "border-border bg-surface hover:border-brand/30"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full">
                  인기
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-muted">원/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="text-brand mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                시작하기
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
