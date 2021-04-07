import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

import React from 'react';

function App() {
	return (
		<ChatEngine
			height='100vh'
			projectID='df9a7190-3b7d-4466-97d1-52b808c93991'
			userName='arif-hstu'
			userSecret='arif12345'
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
		/>
	);
}

export default App;