import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeStoryDecorator } from '@/ui/theme/story-decorator';
import {
  Message, 
  MessageActions, 
  MessageAvatar,
  MessageCopyAction, 
  MessageEditAction, 
  MessageTokens 
} from '@/ui/components/message';
import { Skeleton as BothubSkeleton } from '@/ui/components/skeleton'; 
import { Messages } from '.';

export type MessagesMeta = Meta<typeof Messages>;

export type MessagesStory = StoryObj<typeof Messages>;

export const Basic: MessagesStory = {
  args: {
    children: (
      <>
        <Message
          avatar={<MessageAvatar />}
          actions={(
            <MessageActions>
              <MessageCopyAction />
              <MessageEditAction />
            </MessageActions>
          )}
        >
          Привет бот
        </Message>
        <Message
          variant="assistant"
          avatar={(
            <MessageAvatar variant="bot" />
          )}
          tokens={(
            <MessageTokens>
              -223 tkn
            </MessageTokens>
          )}
          actions={(
            <MessageActions>
              <MessageCopyAction />
            </MessageActions>
          )}
        >
          Привет! Чем я могу помочь?
        </Message>
        <Message
          avatar={<MessageAvatar />}
          actions={(
            <MessageActions>
              <MessageCopyAction />
              <MessageEditAction />
            </MessageActions>
          )}
        >
          Напиши код Helloworld на Javascript
        </Message>
        <Message
          variant="assistant"
          avatar={(
            <MessageAvatar variant="bot" />
          )}
          tokens={(
            <MessageTokens>
              -1571 tkn
            </MessageTokens>
          )}
          actions={(
            <MessageActions>
              <MessageCopyAction />
            </MessageActions>
          )}
        >
          {`Конечно! Вот пример кода на JavaScript для вывода фразы "Hello, World!":
\`\`\`javascript
console.log("Hello, world!");
\`\`\``}
        </Message>
        <Message
          avatar={<MessageAvatar />}
          actions={(
            <MessageActions>
              <MessageCopyAction />
              <MessageEditAction />
            </MessageActions>
          )}
        >
          Спасибо бот! то что нужно
        </Message>
      </>
    )
  }
};

export const Skeleton: MessagesStory = {
  args: {
    children: [...Array(3)].map((_, index) => (
      <React.Fragment key={index}>
        <Message
          avatar={(
            <MessageAvatar>
              <BothubSkeleton />
            </MessageAvatar>
          )}
          skeleton
        />
        <Message 
          variant="assistant"
          avatar={(
            <MessageAvatar>
              <BothubSkeleton />
            </MessageAvatar>
          )}
          skeleton 
        />
      </React.Fragment>
    ))
  }
};

export default {
  title: 'UI Components/Messages',
  component: Messages,
  decorators: [ThemeStoryDecorator()],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as MessagesMeta;
