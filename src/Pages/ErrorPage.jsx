// src/Pages/ErrorPage.jsx
import React from "react";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("Router error:", error);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Oops — Something went wrong</h1>
      <p>{error?.status ? `${error.status} - ${error.statusText}` : "Page not found or an error occurred."}</p>
      <pre style={{ textAlign: "left", maxWidth: 700, margin: "1rem auto" }}>
        {error?.message ?? ""}
      </pre>
      <div style={{ marginTop: 16 }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}
