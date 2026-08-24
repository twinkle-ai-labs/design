import DocsNav from "@/components/DocsNav";
import AlphaSection from "@/components/sections/AlphaSection";
import ColorsSection from "@/components/sections/ColorsSection";
import HeroSection from "@/components/sections/HeroSection";
import HistorySection from "@/components/sections/HistorySection";
import MeaningSection from "@/components/sections/MeaningSection";
import MotionSection from "@/components/sections/MotionSection";
import RulesSection from "@/components/sections/RulesSection";
import SizesSection from "@/components/sections/SizesSection";
import SpacingSection from "@/components/sections/SpacingSection";
import TypeSection from "@/components/sections/TypeSection";

import type { Metadata } from "next";
import { shareCard } from "@/lib/seo";

const DESCRIPTION =
  "Twinkle AI Labs의 모든 제품이 공유하는 디자인 시스템, Aurora Ledger의 토큰과 원칙을 소개합니다.";

export const metadata: Metadata = {
  title: "Aurora Ledger",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  ...shareCard({ title: "Aurora Ledger — 디자인 시스템", description: DESCRIPTION, path: "/" }),
};

/**
 * 디자인 시스템 한 장 — **차례만** 든다.
 *
 * 구획의 차례는 `lib/design` 의 `DOC_SECTIONS` 와 같아야 한다.
 * 목차가 그 목록을 읽고, 「지금 읽는 칸」을 재는 일도 그 목록을 읽는다.
 */
export default function DesignPage() {
  return (
    <>
      <HeroSection />
      <DocsNav />
      <MeaningSection />
      <ColorsSection />
      <AlphaSection />
      <SpacingSection />
      <SizesSection />
      <MotionSection />
      <TypeSection />
      <RulesSection />
      <HistorySection />
    </>
  );
}
