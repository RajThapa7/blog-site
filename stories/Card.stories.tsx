import CardComponent from "@/components/Card/Card";
import { Meta, StoryObj } from "@storybook/react";
import { SiTypescript } from "react-icons/si";

const meta: Meta<typeof CardComponent> = {
  title: "components/Card",
  component: CardComponent,
};
export default meta;

type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
  args: {
    title: "Card Title",
    icon: <SiTypescript />,
  },
};
