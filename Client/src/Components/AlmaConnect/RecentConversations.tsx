import React from 'react';
import { Link } from 'react-router-dom';

interface Conversation {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

interface RecentConversationsProps {
  conversations: Conversation[];
}

const RecentConversations: React.FC<RecentConversationsProps> = ({ conversations }) => {
  return (
    <div className="recent-conversations">
      <h3>Recent Messages</h3>
      {conversations.length === 0 ? (
        <p className="no-messages">No recent messages</p>
      ) : (
        <div className="conversation-list">
          {conversations.map((conversation) => (
            <Link to={`/messages/${conversation.id}`} key={conversation.id} className="conversation-item">
              <div className="conversation-preview">
                <h4>{conversation.name}</h4>
                <p className="message-preview">{conversation.message}</p>
                <span className="message-time">{conversation.timestamp}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Link to="/messages" className="view-all-messages">View all messages</Link>
    </div>
  );
};

export default RecentConversations;