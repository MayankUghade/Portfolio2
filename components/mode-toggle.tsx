"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4">
      <div className="p-3 rounded-full border-2 border-gray-500 w-fit cursor-pointer">
        {theme === "dark" ? (
          <SunIcon
            className="w-[25px] h-[25px]"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="w-[25px] h-[25px]"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
}
