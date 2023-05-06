import FooterMenuComponent from "@/components/FooterMenu/FooterMenu";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterMenuComponent> = {
  title: "components/FooterMenu",
  component: FooterMenuComponent,
};
export default meta;

type Story = StoryObj<typeof FooterMenuComponent>;

export const FooterMenu: Story = {};
