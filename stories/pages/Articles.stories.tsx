import ArticlePageComponent from "@/pages/articles";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticlePageComponent> = {
  title: "pages/Articles",
  component: ArticlePageComponent,
};
export default meta;

type Story = StoryObj<typeof ArticlePageComponent>;

export const Articles: Story = {};
