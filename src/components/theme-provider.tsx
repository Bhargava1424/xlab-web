"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider 
      {...props}
      enableSystem={true}
      disableTransitionOnChange={true}
      enableColorScheme={false}
      attribute="class"
      defaultTheme="system"
      storageKey="xlab-theme"
      themes={["light", "dark", "system"]}
    >
      {children}
    </NextThemesProvider>
  )
}