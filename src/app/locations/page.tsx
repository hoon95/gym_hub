"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LOCATIONS } from "@/data/locations";
import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationsPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-brand">지점</span>찾기
          </h1>
          <p className="mt-3 text-muted text-lg">
            가까운 짐허브 지점을 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((location, i) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-brand/30 transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3">{location.name}</h3>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      size={16}
                      className="text-brand mt-0.5 shrink-0"
                    />
                    <p className="text-sm text-muted">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={16} className="text-brand shrink-0" />
                    <p className="text-sm text-muted">{location.phone}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={16} className="text-brand mt-0.5 shrink-0" />
                    <div className="text-sm text-muted">
                      <p>평일 {location.schedule.weekday}</p>
                      <p>주말 {location.schedule.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
