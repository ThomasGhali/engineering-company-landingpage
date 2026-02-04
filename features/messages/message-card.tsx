'use client';

import { useState, useRef, useActionState, useEffect } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

import {
  Trash2,
  Reply as ReplyIcon,
  SendHorizonal,
  X,
} from 'lucide-react';

import MessageCardHeader from './message-card-header';
import MessageCardContent from './message-card-content';

import { Message } from './types';

import { deleteMessage, replyMessage } from './actions';
import { Field } from '@/components/ui/field';
import { InputGroup, InputGroupTextarea } from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';

export default function MessageCard({ message }: { message: Message }) {
  const [isReplying, setIsReplying] = useState(false);
  const [isReplied, setIsReplied] = useState(message.replied);

  const replyFormRef = useRef<HTMLFormElement>(null);
  const deleteFormRef = useRef<HTMLFormElement>(null);

  const [replyState, replyAction, isReplyPending] = useActionState(
    replyMessage,
    { error: undefined, success: undefined },
  );

  const [deleteState, deleteAction, isDeletePending] = useActionState(
    deleteMessage,
    { error: undefined, success: undefined },
  );

  // Reset reply form when reply state changes
  useEffect(() => {
    if (replyState.success) {
      setIsReplying(false);
      setIsReplied(true);
    }
  }, [replyState]);

  return (
    <Card className="w-[270px] gap-3 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-linear-to-r from-white to-slate-50/50 overflow-hidden">
      {isReplying ? (
        // Reply form
        <form
          ref={replyFormRef}
          action={replyAction}
          className="grid grid-rows-3-[1fr_2fr] h-full"
        >
          <input type="hidden" name="id" value={message.id} />
          <input
            type="hidden"
            name="sendToEmail"
            value={message.email || undefined}
          />
          <input type="hidden" name="sendToAbout" value={message.about} />

          <CardHeader className="text-sm font-medium">
            Replying to {`${message.firstName} ${message.lastName}`}
          </CardHeader>

          <CardContent className="flex flex-col justify-between px-4">
            <Field>
              <InputGroup>
                <InputGroupTextarea
                  name="message"
                  placeholder="Enter your message .."
                  className="min-h-[80px] max-h-[225px] overflow-y-auto resize-none"
                />
              </InputGroup>
            </Field>
            <div className="w-full flex justify-between">
              <ConfirmDialog
                title="Send Message"
                description="Are you sure you want to send this message?"
                confirmLabel="Send"
                onConfirm={() => replyFormRef.current?.requestSubmit()}
              >
                <button className="button1 text-foreground">
                  {isReplyPending ? (
                    <>
                      <Spinner />
                      Sending
                    </>
                  ) : (
                    <>
                      Send
                      <SendHorizonal className="w-4 h-4" />
                    </>
                  )}
                </button>
              </ConfirmDialog>

              <ConfirmDialog
                title="Cancel Reply"
                description="Are you sure you want to cancel? Your message will be lost."
                confirmLabel="Discard"
                cancelLabel="Continue Editing"
                variant="destructive"
                onConfirm={() => setIsReplying(false)}
              >
                <button className="button1 text-foreground hover:text-destructive">
                  Cancel
                  <X className="w-4 h-4" />
                </button>
              </ConfirmDialog>
            </div>
          </CardContent>
        </form>
      ) : (
        // Message content
        <>
          <MessageCardHeader message={message} />

          <MessageCardContent message={message} />

          {/* Action Buttons */}
          <CardFooter className="flex justify-around w-full px-0">
            <button
              onClick={() => setIsReplying(true)}
              className={
                'button1' +
                (isReplied
                  ? ' bg-green-600 hover:bg-green-700 px-3'
                  : ' bg-blue-600 hover:bg-blue-700')
              }
            >
              <ReplyIcon className="w-4 h-4" />
              {isReplied ? 'Reply again' : 'Reply'}
            </button>

            <form ref={deleteFormRef} action={deleteAction}>
              <input type="hidden" name="id" value={message.id} />
              <ConfirmDialog
                title="Delete Message"
                description="Are you sure you want to delete this message?"
                confirmLabel="Delete"
                variant="destructive"
                onConfirm={() => deleteFormRef.current?.requestSubmit()}
              >
                <button className="button1 text-foreground hover:text-destructive">
                  {isDeletePending ? (
                    <>
                      <Spinner />
                      Deleting
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </>
                  )}
                </button>
              </ConfirmDialog>
            </form>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
