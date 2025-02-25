import React from 'react';

interface Alumni {
  id: string;
  profilePic: string;
  name: string;
  isOnline: boolean;
  title: string;
  company: string;
  major: string;
  gradYear: number;
  location: string;
  connections: number;
}

interface AlumniListProps {
  alumni: Alumni[];
  onViewProfile: (id: string) => void;
  onStartChat: (id: string) => void;
}

const AlumniList: React.FC<AlumniListProps> = ({ alumni, onViewProfile, onStartChat }) => {
  if (alumni.length === 0) {
    return <div className="no-results">No alumni found matching your search criteria.</div>;
  }

  return (
    <div className="alumni-list">
      {alumni.map((alumnus) => (
        <div key={alumnus.id} className="alumni-card">
          <div className="alumni-photo">
            <img src={alumnus.profilePic} alt={`${alumnus.name}`} />
            {alumnus.isOnline && <span className="online-indicator"></span>}
          </div>
          
          <div className="alumni-info">
            <h3>{alumnus.name}</h3>
            <p className="alumni-title">{alumnus.title} at {alumnus.company}</p>
            <p className="alumni-details">
              {alumnus.major} | Class of {alumnus.gradYear} | {alumnus.location}
            </p>
            <p className="connection-info">{alumnus.connections} connections</p>
          </div>
          
          <div className="alumni-actions">
            <button 
              className="view-profile-btn" 
              onClick={() => onViewProfile(alumnus.id)}
            >
              View Profile
            </button>
            <button 
              className="message-btn" 
              onClick={() => onStartChat(alumnus.id)}
            >
              Message
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlumniList;