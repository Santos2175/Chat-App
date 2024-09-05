import { useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    const success = handleInputErrors(message);
    if (!success) {
      return;
    }
    setLoading(true);

    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      setMessages([...messages, data]);
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;

//handle input errors
function handleInputErrors(text) {
  if (!text) {
    return false;
  }
  return true;
}
