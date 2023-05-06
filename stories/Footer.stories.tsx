import FooterComponent from "@/components/Footer/Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterComponent> = {
  title: "Compound Component/Footer",
  component: FooterComponent,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};
