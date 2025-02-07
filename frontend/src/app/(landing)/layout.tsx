import React from "react";

export default function Landing({
  hero,
  navbar,
  gradient
}: {
  hero: React.ReactNode; // O usa un tipo más específico si lo sabes
  navbar: React.ReactNode;
  gradient: React.ReactNode;
}) {
  return (
    <main className="relative">
      {gradient}
      {navbar}
      <div className="relative mx-10 lg:mx-44">
        {hero}
      </div>
    </main>
  );
}
