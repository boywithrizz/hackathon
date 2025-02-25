import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchParams: { query: string; gradYear: string; major: string; company: string; location: string }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [gradYear, setGradYear] = useState('');
  const [major, setMajor] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSearch({ query, gradYear, major, company, location });
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="search-main">
          <input
            type="text"
            placeholder="Search alumni by name, company, or title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
          <button 
            type="button" 
            className="advanced-toggle"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showAdvanced && (
          <div className="advanced-search">
            <div className="filter-group">
              <label>Graduation Year</label>
              <select 
                value={gradYear} 
                onChange={(e) => setGradYear(e.target.value)}
              >
                <option value="">Any Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Major</label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <label>Company</label>
              <input
                type="text"
                placeholder="e.g. Google"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="e.g. San Francisco"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;