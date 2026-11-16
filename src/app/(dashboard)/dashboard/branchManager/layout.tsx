import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function BranchManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const role = session.user.role || "user";
  if (role !== "branchManager" && role !== "admin") {
    redirect(`/dashboard/${role}`);
  }

  return <>{children}</>;
}
