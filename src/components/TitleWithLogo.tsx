import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { useColorTheme } from '../theme';

interface TitleWithLogoProps { }

export const TitleWithLogo: React.FC<TitleWithLogoProps> = () => {
  const navigate = useNavigate();
  const { theme } = useColorTheme();

  return (
    <div>
      <img
        onClick={() => navigate('/')}
        src="/download (1).svg"
        alt="Museum Logo"
        style={{
          width: '200px',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
      <p style={styles.logoSubtitle(theme) as CSSProperties}>Museum Of Science And Innovation</p>
    </div>
  );
};

const styles = {
  logoSubtitle: (theme: any) => ({
    margin: 0,
    fontSize: "1rem",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
  }),
};