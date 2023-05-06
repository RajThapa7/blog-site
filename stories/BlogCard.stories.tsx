import { default as BlogCardComponent } from "@/components/BlogCard/BlogCard";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BlogCardComponent> = {
  component: BlogCardComponent,
  title: "Compound Component/BlogCard",
};
export default meta;

type Story = StoryObj<typeof BlogCardComponent>;

export const BlogCard: Story = {};
