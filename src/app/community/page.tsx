"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WOD_POSTS, DIET_POSTS } from "@/data/community";
import { useCommunityStore } from "@/stores/community-store";
import { cn } from "@/lib/utils";

export default function CommunityPage() {
  const { activeTab, setActiveTab, selectedIndex, setSelectedIndex } =
    useCommunityStore();

  const posts = activeTab === "wod" ? WOD_POSTS : DIET_POSTS;
  const selectedPost = posts[selectedIndex];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-brand">커뮤니티</span>
          </h1>
          <p className="mt-3 text-muted text-lg">
            회원들의 운동 이야기와 식단 팁을 공유하세요
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setActiveTab("wod")}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer",
              activeTab === "wod"
                ? "bg-brand text-white"
                : "bg-surface-light text-muted hover:text-foreground"
            )}
          >
            오운완 (WOD)
          </button>
          <button
            onClick={() => setActiveTab("diet")}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer",
              activeTab === "diet"
                ? "bg-brand text-white"
                : "bg-surface-light text-muted hover:text-foreground"
            )}
          >
            식단 (Diet)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured post */}
          <motion.div
            key={`${activeTab}-${selectedIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-border bg-surface overflow-hidden"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={selectedPost.image}
                alt={selectedPost.content}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={selectedPost.avatar}
                  alt={selectedPost.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{selectedPost.author}</p>
                  <p className="text-sm text-muted">{selectedPost.age}세</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{selectedPost.content}</h3>
              <p className="text-sm text-brand">{selectedPost.title}</p>
            </div>
          </motion.div>

          {/* Post list */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-muted mb-1">
              Weekly HOT
            </p>
            {posts.map((post, i) => (
              <motion.button
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                onClick={() => setSelectedIndex(i)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border text-left transition-all cursor-pointer",
                  selectedIndex === i
                    ? "border-brand/50 bg-brand/5"
                    : "border-border bg-surface hover:border-brand/30"
                )}
              >
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={44}
                  height={44}
                  className="rounded-full shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{post.content}</p>
                  <p className="text-xs text-muted mt-0.5">
                    {post.author} · {post.age}세
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
