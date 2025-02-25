import React from 'react';

interface Suggestion {
  id: number;
  name: string;
  title: string;
  company: string;
  mutual: number;
}

interface SuggestedConnectionsProps {
  suggestions: Suggestion[];
}

const SuggestedConnections: React.FC<SuggestedConnectionsProps> = ({ suggestions }) => {
  return (
    <div className="suggested-connections">
      <h3>Alumni You May Know</h3>
      <div className="suggestions-list">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="suggestion-card">
            <img src="/api/placeholder/60/60" alt={suggestion.name} className="suggestion-pic" />
            <div className="suggestion-info">
              <h4>{suggestion.name}</h4>
              <p>{suggestion.title} at {suggestion.company}</p>
              <p className="mutual-connections">{suggestion.mutual} mutual connections</p>
            </div>
            <button className=" connect-btn hover:bg-blue-600 hover:text-white transition-colors duration-200">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedConnections;