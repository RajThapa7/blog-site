import NavbarComponent from "@/components/Navbar/Navbar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavbarComponent> = {
  title: "Compound Component/Navbar",
  component: NavbarComponent,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof NavbarComponent>;

export const Navbar: Story = {};
