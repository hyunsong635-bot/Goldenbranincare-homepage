import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, organization, phone, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "필수 항목을 입력해주세요." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NAVER_EMAIL,
      pass: process.env.NAVER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"골든브레인케어 홈페이지" <${process.env.NAVER_EMAIL}>`,
    to: "brain_care@naver.com",
    replyTo: email,
    subject: `[도입 문의] ${organization ? `${organization} - ` : ""}${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000c26; border-bottom: 2px solid #fed65b; padding-bottom: 8px;">도입 문의가 접수됐습니다</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 10px; color: #44474f; width: 100px;">이름</td><td style="padding: 10px; font-weight: bold;">${name}</td></tr>
          <tr style="background:#faf3e5;"><td style="padding: 10px; color: #44474f;">기관명</td><td style="padding: 10px;">${organization || "-"}</td></tr>
          <tr><td style="padding: 10px; color: #44474f;">연락처</td><td style="padding: 10px;">${phone || "-"}</td></tr>
          <tr style="background:#faf3e5;"><td style="padding: 10px; color: #44474f;">이메일</td><td style="padding: 10px;">${email}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #faf3e5; border-radius: 8px;">
          <p style="color: #44474f; margin: 0 0 6px; font-size: 13px;">문의 내용</p>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
