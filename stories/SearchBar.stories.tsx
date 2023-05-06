import SearchBarComponent from "@/components/SearchBar/SearchBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBarComponent> = {
  title: "components/SearchBar",
  component: SearchBarComponent,
};
export default meta;

type Story = StoryObj<typeof SearchBarComponent>;

export const SearchBar: Story = {};
