import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.png';
import LoadingSpinnergif from '../assets/loading-spinner.gif';
import './ChatMessage.css'

export function ChatMessage({ message, sender, time, isLoading}) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    );
  }
  */

  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} width="50" className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {isLoading ? (
          <img
            src={LoadingSpinnergif}
            className="loading-spinner"
          />
        ) : (
          message
        )}
        {/* The "time && (" check is optional. I added it just to be safe. */}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} width="50" className="chat-message-profile" />
      )}
    </div>
  );
}