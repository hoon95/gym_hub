import Link from "next/link";

const FOOTER_LINKS = {
  서비스: [
    { href: "/equipment", label: "기구찾기" },
    { href: "/tour", label: "헬스장 투어" },
    { href: "/locations", label: "지점찾기" },
    { href: "/quiz", label: "체력진단" },
  ],
  커뮤니티: [
    { href: "/community", label: "운동 인증" },
    { href: "/community", label: "식단 공유" },
  ],
  고객지원: [
    { href: "/pricing", label: "멤버십 안내" },
    { href: "#", label: "자주 묻는 질문" },
    { href: "#", label: "이용약관" },
    { href: "#", label: "개인정보처리방침" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-brand">GYMHUB</span>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              당신의 피트니스 파트너.
              <br />
              최신 기구와 전문 트레이너가 함께합니다.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; 2025 GYMHUB. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted hover:text-foreground text-xs">
              Instagram
            </a>
            <a href="#" className="text-muted hover:text-foreground text-xs">
              YouTube
            </a>
            <a href="#" className="text-muted hover:text-foreground text-xs">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
