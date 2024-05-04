"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4">
      <div className="p-3 rounded-full shadow border-2 w-fit cursor-pointer bg-white">
        {theme === "dark" ? (
          <SunIcon
            className="w-[25px] h-[25px] text-black"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="w-[25px] h-[25px] text-black"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
}
