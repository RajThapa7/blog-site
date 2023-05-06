import Button from "@/components/Button/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    isSecondary: true,
  },
};
