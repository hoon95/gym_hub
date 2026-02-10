"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WOD_POSTS } from "@/data/community";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CommunityPreview() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-brand">커뮤니티</span> 인기글
            </h2>
            <p className="mt-3 text-muted">
              회원들의 생생한 운동 이야기를 만나보세요
            </p>
          </div>
          <Link href="/community" className="hidden sm:block">
            <Button variant="ghost" className="gap-1">
              전체보기
              <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WOD_POSTS.map((post, i) => (
            <motion.div
              key={post.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-brand/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.content}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={post.avatar}
                    alt={post.author}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-muted">{post.age}세</p>
                  </div>
                </div>
                <p className="font-medium mb-2">{post.content}</p>
                <p className="text-xs text-brand">{post.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/community" className="sm:hidden mt-8 block">
          <Button variant="outline" className="w-full gap-1">
            전체보기
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
