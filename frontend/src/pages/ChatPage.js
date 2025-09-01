import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  // 1. Declare state at the top level of the component
  const [chats, setChats] = useState([]);

  // 2. Fetch data in a function
  const fetchChats = async () => {
    try {
      const { data } = await axios.get('/chats');
      setChats(data); // update state
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  // 3. useEffect to call fetchChats once on mount
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h1>Chat Page</h1>
        {chats.length === 0 ? (
        <p>No chats found bro</p>
      ) : (
        chats.map(chat => (
          <div key={chat._id}>{chat.chatName}</div>
        ))
      )}
    </div>
  );
};

export default ChatPage;

