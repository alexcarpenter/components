import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    color: "primary",
    disabled: false,
    shape: "default",
    size: "md",
    variant: "filled",
  },
  argTypes: {
    children: {
      control: "text",
    },
    color: {
      control: "select",
      options: ["primary", "neutral", "negative"],
    },
    disabled: {
      control: "boolean",
    },
    shape: {
      control: "select",
      options: ["default", "square", "circle"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline", "ghost", "link"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
