import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) { // defines a functional component called ChatMessage that takes in props as an argument
    // const message = props.message;
    // const sender = props.sender;
    // const {message, sender} = props; // destructuring assignment to extract message and sender from props

    return (
        <div className={
            sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
        }>
            {sender === 'robot' && (
                <img src={RobotProfileImage}
                    className="chat-message-profile " />
            )}

            <div className="chat-message-text">
                {message}
            </div>

            {sender === 'user' && (
                <img src={UserProfileImage}
                    className="chat-message-profile" />
            )}
        </div>
    );
}
