// components/analytics.tsx
"use client";
import usePlausible from "plausible-tracker";

export default function Analytics() {
  const plausible = usePlausible();
  plausible.trackPageview();
  return null;
}
