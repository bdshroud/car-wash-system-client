"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-[#15295e] sm:text-3xl">
          Reset password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your account email address and we will send you password reset instructions.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <Field>
          <FieldLabel htmlFor="reset-email">Email</FieldLabel>
          <InputGroup className="h-10">
            <InputGroupAddon>
              <Mail className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              id="reset-email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </InputGroup>
        </Field>

        <Button
          type="submit"
          className="h-10 w-full bg-[#15295e] text-sm text-white hover:bg-[#1e3a80]"
        >
          Send Reset Link
        </Button>
      </form>

      <div className="text-center">
        <Link
          href="/signin"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#15295e] hover:underline"
        >
          <ArrowLeft className="size-4" /> Back to sign in
        </Link>
      </div>
    </div>
  );
}
