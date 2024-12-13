import { useColorTheme } from "../theme";

interface FooterProps {};
export const Footer: React.FC<FooterProps> = () => {
  const { theme } = useColorTheme();
    return (
      <footer style={{ padding: '1rem', marginTop: 'auto' , backgroundColor: theme.palette.primary.main, color: 'inherit'}}>
        <p>&copy; 2024 Nouri Museum App</p>
      </footer>
    );
  };
  