import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessageList from './components/ChatMessageList';
import './App.css'


function App() { // this is used instead of a variable like const app = () cause it allows us to use JSX syntax and return a React element that represents the UI of our application. So using component is more appropriate here than using a variable because 

    const [chatMessageList, setChatMessageList] = useState(
        [{
            message: "hello chatbot",
            sender: "user",
            id: "id1"
        },
        {
            message: "Hello human, how can I help you?",
            sender: "robot",
            id: "id2"
        },
        {
            message: "Can you get me todays date?",
            sender: "user",
            id: "id3"
        },
        {
            message: "Sure, today's date is April 29, 2026.",
            sender: "robot",
            id: "id4"

        }]);

    //const [ chatMessageList, setChatMessageList]=array; thus it has been destructured at the beginning
    // const chatMessageList = array[0];
    // const setChatMessageList = array[1];


    return (
        <div className="app-container">

            <ChatMessageList
                chatMessageList={chatMessageList}
            />
            <ChatInput
                chatMessageList={chatMessageList}
                setChatMessageList={setChatMessageList}
            />
        </div>
    );
}

export default App
