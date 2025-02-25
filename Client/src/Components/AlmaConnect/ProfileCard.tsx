import React from 'react';
import { Link } from 'react-router-dom';

interface ProfileCardProps {
  name: string;
  profilePic: string;
  title: string;
  major: string;
  gradYear: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, profilePic, title, major, gradYear }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profilePic} alt={name} className="profile-pic" />
        <h3 className="profile-name">{name}</h3>
        <p className="profile-title">{title}</p>
        <p className="profile-details">{major} | Class of {gradYear}</p>
      </div>
      <div className="profile-actions">
        <Link to="/profile" className="profile-link">View your profile</Link>
      </div>
    </div>
  );
};

export default ProfileCard;