// import React has been deprecated from version 17

import MessageForm from '../components/MessageForm';
import MyMessage from '../components/MyMessage';
import TheirMessage from '../components/TheirMessage';

const ChatFeed = (props) => {
	const { chats, activeChat, userName, messages }=props;

	const chat = chats && chats[activeChat];

	const renderMessages = () => {
		const keys  = Object.keys(messages);

		console.log(keys);
	}

	renderMessages();
	return (
		<div>
			ChatFeed
		</div>
	)
}

export default ChatFeed;