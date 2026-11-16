import Link from "next/link";
import { Droplets, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { BRANCHES } from "@/lib/branches";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-[#15295e]">
          <Sparkles className="size-4" /> About PH Car Wash
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#15295e] sm:text-4xl">
          Premium Car Detailing & Wash Care
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Dedicated to providing the cleanest, most thorough vehicle washing and detailing experience using modern eco-friendly equipment.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-xl border p-6">
          <div className="grid size-10 place-items-center rounded-lg bg-[#15295e] text-white">
            <Droplets className="size-5" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Our Mission</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            To provide fast, affordable, and top-tier car cleaning with zero hassle. Book online, select your branch and time slot, and let our professional team handle the rest.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <div className="grid size-10 place-items-center rounded-lg bg-[#15295e] text-white">
            <CheckCircle2 className="size-5" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">Quality Materials</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We use biodegradable soaps, pH-balanced foam cleansers, and ultra-plush microfiber towels that protect your paint and clear coat.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-muted/40 p-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-[#15295e]">
          <MapPin className="size-5" /> Our Service Branches
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          We operate fully equipped branches in 4 major divisions across Bangladesh:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {BRANCHES.map((b) => (
            <Link
              key={b}
              href={`/services?branch=${b}`}
              className="rounded-full border bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-[#15295e]"
            >
              {b} Branch
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
