import { redirect } from "next/navigation";

// Visiting /booking without a specific service id redirects to /services
export default function BookingIndexPage() {
  redirect("/services");
}
