import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SocialLinks> = {
  title: "components/Social",
  component: SocialLinks,
};
export default meta;

type Story = StoryObj<typeof SocialLinks>;

export const Social: Story = {};
