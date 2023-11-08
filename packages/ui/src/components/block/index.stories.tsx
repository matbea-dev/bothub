import type { Meta, StoryObj } from '@storybook/react';
import { ThemeStoryDecorator } from '@/ui/theme/story-decorator';
import { Block, BlockToolbar, BlockToolbarButtons } from '.';
import { Typography } from '@/ui/components/typography';
import { Button } from '@/ui/components/button';
import { Plus2Icon } from '@/ui/icons';

export type BlockMeta = Meta<typeof Block>;

export type BlockStory = StoryObj<typeof Block>;

export const Basic: BlockStory = {
  args: {
    title: 'Title',
    children: (
      [...Array(50)].map((_, index) => (
        <Typography 
          key={index}
          component="h1"
          variant="h1"
        >
          Content
        </Typography>
      ))
    )
  }
};

export const Toolbar: BlockStory = {
  args: {
    ...Basic.args,
    toolbar: (
      <BlockToolbar>
        <BlockToolbarButtons>
          <Button
            startIcon={<Plus2Icon />}
          >
            Создать закладку
          </Button>
        </BlockToolbarButtons>
      </BlockToolbar>
    ),
  }
};

export default {
  title: 'UI Components/Block',
  component: Block,
  decorators: [ThemeStoryDecorator()],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as BlockMeta;