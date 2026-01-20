import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import StatsCard from "./components/StatsCard";

export default function Page() {
  return (
    <div className="page-lines">
      <section className="container mx-auto max-w-5xl px-6 py-24">
        <Hero />
      </section>

      <div className="wave" />

      <section className="bg-pale">
        <div className="container mx-auto max-w-5xl px-6 py-20 space-y-20">
          <Features />

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="card p-8">
                <StatsCard />
              </div>
            </div>
            <div className="flex-1">
              <div className="p-6">
                <h3 className="text-xl font-semibold">내가 요즘 어떤 감정 상태인지</h3>
                <p className="text-sm text-muted mt-2">주기적으로 감정을 기록하면 패턴을 확인할 수 있어요.</p>
              </div>
            </div>
          </div>

          <Testimonials />
        </div>
      </section>

      <footer className="py-24">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="text-sm text-muted">날마다 에피그램</div>
        </div>
      </footer>
    </div>
  );
}