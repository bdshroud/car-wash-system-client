import type { TService } from "@/types";
import { API_BASE_URL } from "./config";

// Small helper functions that ask the Express API for services.

// GET calls to the Express API.
// Used from Server Components only (the API URL is not exposed to the browser).

// Returns services from the backend with optional query string.
export async function getServices(query?: string): Promise<TService[]> {
  try {
    const url = query ? `${API_BASE_URL}/services?${query}` : `${API_BASE_URL}/services`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Could not load services (status ${res.status}).`);
    }

    const body = await res.json();
    return body.data ?? [];
  } catch (error) {
    if ((error as { digest?: string })?.digest === "DYNAMIC_SERVER_USAGE") {
      throw error;
    }
    console.error("getServices failed:", error);
    return [];
  }
}

// Returns one service by its id.
// Returns null when the service does not exist or cannot be reached.
export async function getServiceById(id: string): Promise<TService | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/services/${id}`, {
      cache: "no-store",
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      throw new Error(`Could not load the service (status ${res.status}).`);
    }

    const body = await res.json();
    return body.data ?? null;
  } catch (error) {
    if ((error as { digest?: string })?.digest === "DYNAMIC_SERVER_USAGE") {
      throw error;
    }
    console.error("getServiceById failed:", error);
    return null;
  }
}
