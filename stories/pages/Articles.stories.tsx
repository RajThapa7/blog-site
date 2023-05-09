import { Meta, StoryObj } from "@storybook/react";
import ArticlePageComponent from "pages/category";

const meta: Meta<typeof ArticlePageComponent> = {
  title: "pages/Articles",
  component: ArticlePageComponent,
};
export default meta;

type Story = StoryObj<typeof ArticlePageComponent>;

export const Articles: Story = {};
