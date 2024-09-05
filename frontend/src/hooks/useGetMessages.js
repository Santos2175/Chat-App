import { useState } from 'reac';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { getMessages } from '../../../backend/controllers/message.controller';
import useConversation from '../zustand/useConversation';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation;

  useEffect(() => {
    const getMessages = async () => {
      setLoading(false);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`, {
          method: 'GET',
        });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, getMessages]);

  return { loading, messages };
};

export default useGetMessages;
