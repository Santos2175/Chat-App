import { useSocketContext } from '../../context/SocketContext.jsx';
import useConversation from '../../zustand/useConversation.js';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-6 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? 'bg-blue-500' : ''
        }`}
        onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='user avatar' />
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200 px-1'>
              {conversation.fullName}
            </p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;

//STARTER CODE SNIPPET
// import React from 'react';

// const Conversation = () => {
//   return (
//     <>
//       <div className='flex gap-6 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//           <div className='w-12 rounded-full'>
//             <img
//               src='https://avatar.iran.liara.run/public/boy'
//               alt='user avatar'
//             />
//           </div>
//         </div>
//         <div className='flex-1'>
//           <p className='font-bold text-gray-200 px-1'>Shyam</p>
//         </div>
//       </div>
//       <div className='divider my-0 py-0 h-1' />
//     </>
//   );
// };

// export default Conversation;
