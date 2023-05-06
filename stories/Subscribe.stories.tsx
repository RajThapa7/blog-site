import SubscribeComponent from "@/components/Subscribe/Subscribe";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof SubscribeComponent> = {
  title: "Compound Component/Subscribe",
  component: SubscribeComponent,
};
export default meta;

type Story = StoryObj<typeof SubscribeComponent>;

export const Subscribe: Story = {};

Subscribe.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox");
  const button = canvas.getByRole("button");
  await userEvent.type(input, "test@example.com", { delay: 100 });
  await userEvent.click(button);
};
