"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "var(--font-inter), sans-serif",
  headings: {
    fontFamily: "var(--font-poppins), sans-serif",
  },
  colors: {
    brand: [
      "#f0f0ff",
      "#e0e0ff",
      "#c1c4fe",
      "#9d9ffa",
      "#7b7cf7",
      "#5a5af3",
      "#4648F0",
      "#3331d2",
      "#2523b3",
      "#141593",
    ],
  },
  primaryColor: "brand",
});

export function MantineProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}
