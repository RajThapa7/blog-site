import KeyComponent from "@/components/Key/Key";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KeyComponent> = {
  title: "components/Key",
  component: KeyComponent,
  parameters: {
    background: "white",
  },
};
export default meta;

type Story = StoryObj<typeof KeyComponent>;

export const Key: Story = {
  args: {
    children: "Key",
  },
};
