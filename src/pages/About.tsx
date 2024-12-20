import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWithImage } from '../components/CardWithImage';

interface AboutProps { }

export const About: React.FC<AboutProps> = () => {
  const navigate = useNavigate();

  const cardInfo = [
    {
      title: 'Water',
      description: 'Take A Look About Water',
      link: '/water',
      image: '/water.jpg'
    },
    {
      title: 'Wind',
      description: 'Take A Look About Wind',
      link: '/wind',
      image: '/wind.jpg'
    },
    {
      title: 'Energy',
      description: 'Take A Look About Energy',
      link: '/energy',
      image: '/energy.jpg'
    }
  ];

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#f4faff'
    }}>
      {cardInfo.map((card, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(card.link)}
          style={{
            flex: '1 1 calc(100% - 40px)', // Mobile default
            maxWidth: '300px', // Restrict size for larger screens
            backgroundColor: index % 2 === 0 ? '#ffe9e9' : index % 3 === 0 ? '#f3fff3' : '#fffbee',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            textAlign: 'center',
            padding: '20px',
            transition: 'transform 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              borderRadius: '50%',
              marginBottom: '15px'
            }}
          />
          <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{card.title}</h3>
          <p style={{ fontSize: '1rem', color: '#666', marginTop: '10px' }}>{card.description}</p>
          <button
            style={{
              marginTop: 'auto',
              padding: '10px 20px',
              borderRadius: '15px',
              border: 'none',
              backgroundColor: '#000',
              color: '#fff',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#444')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#000')}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};
