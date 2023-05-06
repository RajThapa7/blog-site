import HomeIndex from "@/pages";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomeIndex> = {
  title: "pages/Home",
  component: HomeIndex,
};
export default meta;

type Story = StoryObj<typeof HomeIndex>;

export const Home: Story = {};
