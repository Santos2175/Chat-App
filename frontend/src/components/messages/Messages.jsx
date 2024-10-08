import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => {
          const isLastMessage = idx === messages.length - 1;
          return (
            <div
              key={message._id} // _id is unique
              ref={isLastMessage ? lastMessageRef : null} // Ref only for the last message
            >
              <Message message={message} />
            </div>
          );
        })}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;

//STARTER CODE SNIPPET
// import React from 'react';
// import Message from './Message';

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };

// export default Messages;
