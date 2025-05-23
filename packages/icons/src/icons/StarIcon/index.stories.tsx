import type { Meta, StoryObj } from '@storybook/react';
import { StarIcon } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Icons/StarIcon',
  component: StarIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof StarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: 'medium',
    color: 'currentColor',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    color: 'currentColor',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'currentColor',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'currentColor',
  },
};

export const Colored: Story = {
  args: {
    size: 'medium',
    color: '#FFD700', // Gold color
  },
};
