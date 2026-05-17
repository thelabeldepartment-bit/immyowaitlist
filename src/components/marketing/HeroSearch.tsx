"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export function HeroSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-[680px] mx-auto">
      <div className="flex items-center gap-3 bg-white rounded-2xl shadow-2xl px-5 py-4">
        <Search className="h-5 w-5 text-stone-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Stadt, PLZ oder Adresse…"
          className="flex-1 bg-transparent text-base text-carbon placeholder:text-stone-400 focus:outline-none min-w-0"
        />
      </div>
    </div>
  );
}
