"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../../styles/theme";
import { ThemeProvider } from "next-themes";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}> {/* ✅ use value, not system */}
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
