import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessageList.css'


function ChatMessageList({ chatMessageList }) {

    const chatMessagesRef = useRef(null);

    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    },
        [chatMessageList]);
    return (
        <div className="chat-messages-container"
            ref={chatMessagesRef}>


            {chatMessageList.map((chatMessage) => { // we have an array of components called chatMessageComponents that is created by mapping over the chatMessages array and for each chatMessage object in the array, we return a ChatMessage component with the message and sender props set to the corresponding values from the chatMessage object.  
                return (
                    <ChatMessage
                        message={chatMessage.message} // this gets the message out of the chatMessage object and passes it as a prop to the ChatMessage component
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessageList;