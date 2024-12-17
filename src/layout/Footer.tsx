import { useColorTheme } from "../theme";

interface FooterProps {};
export const Footer: React.FC<FooterProps> = () => {
  const { theme } = useColorTheme();
    return (
      <footer style={{ padding: '1rem', marginTop: 'auto' , backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary}}>
        <p>&copy; 2024 Nouri Museum App</p>
      </footer>
    );
  };
  