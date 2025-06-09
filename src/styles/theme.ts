import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        ughe: {
          red: { value: "#C12226" },
          main: { value: "#8D191C" },
          light: { value: "#E7DBC6" },
          white: { value: "#FFFBF3" },
          yellow: { value: "#EBA720" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
