import Link from "next/link";
import { getServices } from "@/lib/api/services";
import { Check, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ComparePage() {
  const services = await getServices();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#15295e] sm:text-4xl">
          Compare Wash Packages
        </h1>
        <p className="text-sm text-muted-foreground">
          Compare our available services and features side-by-side to choose the best option for your car.
        </p>
      </div>

      {services.length === 0 ? (
        <div className="mt-12 rounded-xl border p-12 text-center text-muted-foreground">
          <p>No services currently available to compare.</p>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#15295e] hover:underline"
          >
            Browse all services <ArrowRight className="size-4" />
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="flex flex-col rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="space-y-1">
                <span className="inline-block rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#15295e]">
                  {service.branch}
                </span>
                <h2 className="text-xl font-bold text-[#15295e]">{service.name}</h2>
                <p className="line-clamp-2 text-xs text-muted-foreground">{service.description}</p>
              </div>

              <div className="my-6 border-y py-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-[#15295e]">৳ {service.price}</span>
                  <span className="text-xs text-muted-foreground">{service.duration} mins</span>
                </div>
                {service.slot && (
                  <p className="mt-1 text-xs text-muted-foreground">Slot: {service.slot}</p>
                )}
              </div>

              <div className="flex-1 space-y-2">
                <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">Features included:</p>
                <ul className="space-y-1.5 text-sm">
                  {service.keyFeatures.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4">
                <Link
                  href={`/services/${service._id}`}
                  className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-[#15295e] text-sm font-medium text-white hover:bg-[#1e3a80]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
