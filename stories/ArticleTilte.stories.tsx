import ArticleTitleComponent from "@/components/ArticleTitle/ArticleTitle";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticleTitleComponent> = {
  title: "components/ArticleTitle",
  component: ArticleTitleComponent,
};

export default meta;

type Story = StoryObj<typeof ArticleTitleComponent>;

export const ArticleTitle: Story = {
  args: {
    children: "Article Title here",
  },
};
