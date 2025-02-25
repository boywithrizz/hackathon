import React from 'react';
import { Link } from 'react-router-dom';

interface NetworkStatsProps {
  connections: number;
  pendingRequests: number;
  recentViews: number;
}

const NetworkStats: React.FC<NetworkStatsProps> = ({ connections, pendingRequests, recentViews }) => {
  return (
    <div className="network-stats">
      <h3>Your Network</h3>
      <div className="stat-item">
        <Link to="/connections">
          <span className="stat-value">{connections}</span>
          <span className="stat-label">Connections</span>
        </Link>
      </div>
      <div className="stat-item">
        <Link to="/requests">
          <span className="stat-value">{pendingRequests}</span>
          <span className="stat-label">Pending Requests</span>
        </Link>
      </div>
      <div className="stat-item">
        <Link to="/profile-views">
          <span className="stat-value">{recentViews}</span>
          <span className="stat-label">Profile Views</span>
        </Link>
      </div>
    </div>
  );
};

export default NetworkStats;