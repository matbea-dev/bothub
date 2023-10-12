import type { Meta, StoryObj } from '@storybook/react';
import { ThemeStoryDecorator } from '@/ui/theme/story-decorator';
import { Tabs } from '.';
import { Tab } from '@/ui/components/tab';

export type TabsMeta = Meta<typeof Tabs>;

export type TabsStory = StoryObj<typeof Tabs>;

export const Basic: TabsStory = {
  args: {
    children: (
      <>
        <Tab active>Tab item #1</Tab>
        <Tab>Tab item #2</Tab>
        <Tab>Tab item #3</Tab>
        <Tab>Tab item #4</Tab>
        <Tab>Tab item #5</Tab>
        <Tab>Tab item #6</Tab>
      </>
    )
  }
};

export default {
  title: 'UI Components/Tabs',
  component: Tabs,
  decorators: [ThemeStoryDecorator()],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as TabsMeta;
