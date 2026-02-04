import MessageCard from './message-card';

import MessagesPagination from './messages-pagination';
import { getMessages } from '@/features/messages/queries';

import { messages as messagesCustom } from '@/features/messages/data';
import { Message } from '@/features/messages/types';

export default async function MessagesPage({
  searchParams,
}: {
  searchParams?: {
    page: string;
  };
}) {
  // dello messages and use from db
  // const page = Number(searchParams?.page || 1);
  // const pageSize = 10;

  // const messages = messagesCustom.slice((page - 1) * pageSize, page * pageSize);
  let {messages, messagesCount} = await getMessages({ page: Number(searchParams?.page || 1) });

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 w-full">
      <div className="flex flex-wrap gap-4 justify-around">
        {messages.map((message: Message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>

      <MessagesPagination messagesLength={messagesCount} />
    </div>
  );
}
