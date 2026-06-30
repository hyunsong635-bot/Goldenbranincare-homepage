import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /brain-friends 상세 페이지는 현재 비공개(접근 차단) — 브레인프렌즈 내용은 /brand 로 이동.
      // 다시 공개하려면 이 항목을 제거하세요.
      {
        source: "/brain-friends",
        destination: "/brand#brainfriends",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
