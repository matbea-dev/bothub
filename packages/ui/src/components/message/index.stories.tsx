import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton as BothubSkeleton } from '@/ui/components/skeleton';
import {
  Message, MessageActions, MessageAvatar, 
  MessageCopyAction, MessageEditAction, MessageText, MessageTokens 
} from '.';
import { ThemeStoryDecorator } from '@/ui/theme/story-decorator';

export type MessageMeta = Meta<typeof Message>;

export type MessageStory = StoryObj<typeof Message>;

export const Assistant: MessageStory = {
  args: {
    variant: 'assistant',
    avatar: (
      <MessageAvatar variant="bot" />
    ),
    tokens: (
      <MessageTokens>
        -1571 CAPS
      </MessageTokens>
    ),
    actions: (
      <MessageActions>
        <MessageCopyAction />
      </MessageActions>
    ),
    children: (
      <MessageText>
        Привет! Чем я могу помочь?
      </MessageText>
    )
  }
};

export const AssistantSkeleton: MessageStory = {
  args: {
    variant: 'assistant',
    avatar: (
      <MessageAvatar>
        <BothubSkeleton />
      </MessageAvatar>
    ),
    skeleton: true
  }
};

export const AssistantCode: MessageStory = {
  args: {
    ...Assistant.args,
    children: (
      <MessageText>
        {`Конечно! Вот пример кода на JavaScript для вывода фразы "Hello, World!":
\`\`\`javascript
console.log("Hello, World!");
\`\`\`
`}
      </MessageText>
    )
  }
};

export const AssistantInlineCode: MessageStory = {
  args: {
    ...AssistantCode.args,
    children: (
      <MessageText>
        {`Конечно! Вот пример кода на JavaScript для вывода фразы "Hello, World!" 
\`console.log("Hello, World!");\``}
      </MessageText>
    )
  }
};

export const User: MessageStory = {
  args: {
    variant: 'user',
    avatar: (
      <MessageAvatar />
    ),
    actions: (
      <MessageActions>
        <MessageCopyAction />
        <MessageEditAction />
      </MessageActions>
    ),
    children: (
      <MessageText>
        Привет бот
      </MessageText>
    )
  }
};

export const UserSkeleton: MessageStory = {
  args: {
    variant: 'user',
    avatar: (
      <MessageAvatar>
        <BothubSkeleton />
      </MessageAvatar>
    ),
    skeleton: true
  }
};

export const UserCode: MessageStory = {
  args: {
    ...User.args,
    children: (
      <MessageText>
        {`Исправь ошибки:
\`\`\`javascript
console.log("Hello, World!");
\`\`\``}
      </MessageText>
    )
  }
};

export const UserInlineCode: MessageStory = {
  args: {
    ...UserCode.args,
    children: (
      <MessageText>
        {`Исправь ошибки:
\`\`\`javascript
console.log("Hello, World!");
\`\`\``}
      </MessageText>
    )
  }
};

export default {
  title: 'UI Components/Message/Item',
  component: Message,
  decorators: [ThemeStoryDecorator()],
  argTypes: {
    avatar: {
      table: {
        disable: true
      }
    },
    tokens: {
      table: {
        disable: true
      }
    },
    actions: {
      table: {
        disable: true
      }
    }
  }
} as MessageMeta;
