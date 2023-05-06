import TitleLink from "@/components/TitleLink/TitleLink";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TitleLink> = {
  title: "components/Title",
  component: TitleLink,
};
export default meta;

type Story = StoryObj<typeof TitleLink>;

export const Title: Story = {
  args: {
    children: "Title here",
    link: "#",
  },
};
