'use client'

import { FallbackProps } from "react-error-boundary";

export function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  console.log("fallback error", error)
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}