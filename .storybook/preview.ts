import "../styles/globals.css";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
