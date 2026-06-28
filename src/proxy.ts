import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ──────────────────────────────────────────────────────────────
// 사이트 잠금(준비 중) 모드
// 이 파일이 존재하면 모든 페이지가 /maintenance 로 표시됩니다.
// 잠금을 풀려면 이 파일(src/proxy.ts)을 삭제하고 다시 빌드/재시작하세요.
// ──────────────────────────────────────────────────────────────

export function proxy(request: NextRequest) {
  // 준비 중 페이지 내용을 보여주되, URL 은 그대로 유지(rewrite)
  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  // 아래 경로는 잠금에서 제외(준비 중 페이지 자체, Next 정적 파일, 파비콘 등)
  matcher: [
    "/((?!maintenance|_next/static|_next/image|favicon.ico).*)",
  ],
};
