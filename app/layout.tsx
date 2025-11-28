import type { Metadata } from "next";
import { Noto_Serif_SC, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

// 引入中文字体
const notoSansSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: ["400", "700", "900"],
  subsets: ["latin"], // 使用允许的子集
});

const maShanZheng = Ma_Shan_Zheng({
  variable: "--font-ma-shan-zheng",
  weight: "400",
  subsets: ["latin"], // 使用允许的子集
});

export const metadata: Metadata = {
  title: "中国旅游文化网",
  description: "探索中国的历史文化与自然风光",
};

export default function RootLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSansSC.variable} ${maShanZheng.variable} antialiased bg-chinese-paper`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c62828' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
