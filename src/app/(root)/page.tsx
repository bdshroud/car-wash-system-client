import Link from "next/link";
import { Droplets, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { BRANCHES } from "@/lib/branches";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-[#15295e] to-[#1e3a80] px-4 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Sparkles className="size-4" /> Professional Auto Detailing
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Give Your Car the Shine It Deserves
          </h1>
          <p className="mt-4 text-base text-gray-200 sm:text-lg">
            Premium car washing and auto care across Dhaka, Chittagong, Khulna, and Sylhet. Fast, reliable, and convenient.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#ffc107] px-6 text-sm font-semibold text-[#15295e] transition-colors hover:bg-[#e5ad06]"
            >
              Explore Services
            </Link>
            <Link
              href="/signin"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border p-6 text-center">
            <div className="grid size-12 place-items-center rounded-full bg-blue-50 text-[#15295e]">
              <Droplets className="size-6" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Eco-Friendly Care</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Biodegradable shampoos and gentle microfiber wash techniques that preserve your paint.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl border p-6 text-center">
            <div className="grid size-12 place-items-center rounded-full bg-blue-50 text-[#15295e]">
              <Clock className="size-6" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Quick Turnaround</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pre-booked slots mean zero waiting in line. We value your schedule and time.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl border p-6 text-center">
            <div className="grid size-12 place-items-center rounded-full bg-blue-50 text-[#15295e]">
              <ShieldCheck className="size-6" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Quality Guaranteed</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Certified technicians and quality inspection on every single wash cycle.
            </p>
          </div>
        </div>

        {/* Branches */}
        <div className="mt-16 rounded-2xl bg-muted/40 p-8 text-center sm:p-12">
          <h2 className="text-xl font-semibold text-[#15295e] sm:text-2xl">
            Serving You Across 4 Major Hubs
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Visit any of our convenient branch locations today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {BRANCHES.map((b) => (
              <Link
                key={b}
                href={`/services?branch=${b}`}
                className="rounded-full border bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-[#15295e] hover:text-[#15295e]"
              >
                {b} Branch
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
