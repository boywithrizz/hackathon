import { useState, useEffect, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import AlumniList from './AlumniList';
import ProfileCard from './ProfileCard';
import NetworkStats from './NetworkStats';
import RecentConversations from './RecentConversations';
import SuggestedConnections from './SuggestedConnections';
import Navbar from '../Navbar/Navbar';
import './AlmaConnect.css';

interface Alumnus {
  id: string;
  name: string;
  profilePic: string;
  gradYear: number;
  major: string;
  company: string;
  title: string;
  location: string;
  connections: number;
  isOnline: boolean;
}

const AlmaConnect = () => {
  const [alumni, setAlumni] = useState<Alumnus[]>([]);
  const [filteredAlumni, setFilteredAlumni] = useState<Alumnus[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    query: '',
    gradYear: '',
    major: '',
    company: '',
    location: ''
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // This would be replaced with an actual API call
    const fetchAlumni = async () => {
      try {
        // Mock data for demonstration
        const mockData = [
          {
            id: '1',
            name: 'Shivam Mishra',
            profilePic: '/api/placeholder/100/100',
            gradYear: 2018,
            major: 'Computer Science',
            company: 'Google',
            title: 'Software Engineer',
            location: 'San Francisco, CA',
            connections: 156,
            isOnline: true
          },
          {
            id: '2',
            name: 'Mayank Joshi',
            profilePic: '/api/placeholder/100/100',
            gradYear: 2020,
            major: 'Business Administration',
            company: 'Goldman Sachs',
            title: 'Investment Banking Analyst',
            location: 'New York, NY',
            connections: 123,
            isOnline: false
          },
          {
            id: '3',
            name: 'Ayush Yadav',
            profilePic: '/api/placeholder/100/100',
            gradYear: 2015,
            major: 'Electrical Engineering',
            company: 'Tesla',
            title: 'Senior Engineering Manager',
            location: 'Austin, TX',
            connections: 287,
            isOnline: true
          },
        ];

        setAlumni(mockData);
        setFilteredAlumni(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching alumni:", error);
        setIsLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  useEffect(() => {
    // Filter alumni based on search filters
    const filterResults = () => {
      const results = alumni.filter(alumnus => {
        const matchesQuery = searchFilters.query === '' || 
          alumnus.name.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
          alumnus.company.toLowerCase().includes(searchFilters.query.toLowerCase()) ||
          alumnus.title.toLowerCase().includes(searchFilters.query.toLowerCase());
          
        const matchesGradYear = searchFilters.gradYear === '' || 
          alumnus.gradYear === Number(searchFilters.gradYear);
          
        const matchesMajor = searchFilters.major === '' || 
          alumnus.major.toLowerCase().includes(searchFilters.major.toLowerCase());
          
        const matchesCompany = searchFilters.company === '' || 
          alumnus.company.toLowerCase().includes(searchFilters.company.toLowerCase());
          
        const matchesLocation = searchFilters.location === '' || 
          alumnus.location.toLowerCase().includes(searchFilters.location.toLowerCase());
          
        return matchesQuery && matchesGradYear && matchesMajor && matchesCompany && matchesLocation;
      });
      
      setFilteredAlumni(results);
    };
    
    filterResults();
  }, [searchFilters, alumni]);

  const handleSearch = (filters: SetStateAction<{ query: string; gradYear: string; major: string; company: string; location: string; }>) => {
    setSearchFilters({...searchFilters, ...filters});
  };

  const viewProfile = (id: any) => {
    navigate(`/alumni/${id}`);
  };

  const startChat = (id: any) => {
    navigate(`/messages/${id}`);
  };

  return (
    <>
    <Navbar/>
    <div className="alma-connect-container">
      <div className="ac-sidebar">
        <ProfileCard 
          name="Your Name"
          profilePic="/api/placeholder/100/100"
          title="Student"
          major="Computer Science"
          gradYear={2025}
        />
        <NetworkStats 
          connections={142}
          pendingRequests={3}
          recentViews={28}
        />
        <RecentConversations 
          conversations={[
            { id: '1', name: 'Vikash Sharma', message: 'Thanks for connecting!', timestamp: '2h ago' },
            { id: '3', name: 'Shubham Kumar', message: 'Can we schedule a call?', timestamp: '1d ago' }
          ]}
        />
      </div>

      <div className="ac-main-content">
        <div className="ac-search-section">
          <h1>AlmaConnect</h1>
          <p>Find and connect with alumni from your college</p>
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {isLoading ? (
          <div className="ac-loading">Loading alumni...</div>
        ) : (
          <AlumniList 
            alumni={filteredAlumni} 
            onViewProfile={viewProfile}
            onStartChat={startChat}
          />
        )}
      </div>
      
      <div className="ac-right-sidebar">
        <SuggestedConnections 
          suggestions={[
            { id: 5, name: 'Vishal', title: 'Marketing Director', company: 'Adobe', mutual: 4 },
            { id: 6, name: 'Aryan Sharma', title: 'Data Scientist', company: 'Netflix', mutual: 2 },
            { id: 7, name: 'Sharad Gupta', title: 'UX Designer', company: 'Apple', mutual: 5 }
          ]}
        />
      </div>
    </div>
    </>
  );
};

export default AlmaConnect;