import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { Cookies } from 'universal-cookie';
import './App.css'
import { ChannelListContainer, ChannelContainer, Auth } from './components';

const apiKey = '2exnd5s4nxyr';
const client = StreamChat.getInstance(apiKey);
const authToken = false; //Will be false default as it is going to be availble if we actually logged in


const App = () => {

  if(!authToken) return <Auth />
  
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer
            
            />
            
        </Chat>
    </div>
  )
}

export default App