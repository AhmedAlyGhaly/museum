import React, { CSSProperties, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useColorTheme } from '../theme';

interface NavProps { }

export const Nav: React.FC<NavProps> = () => {
    const navigate = useNavigate();
    const { theme } = useColorTheme();
    const [_, setAnchorElNav] = useState<null | HTMLElement>(null);
    const pages = ['Visit', 'About', 'Events', 'Opening', 'Timeline'];
    const handleCloseNavMenu = (pathname: string) => {
        setAnchorElNav(null);
        navigate(`/${pathname.toLowerCase()}`);
    };
    return (
        <nav style={styles.nav as CSSProperties}>
            <Typography style={styles.navHeader(theme) as CSSProperties}>navigate</Typography>
            {pages.map((page) => (
                <Typography
                    key={page}
                    onClick={() => handleCloseNavMenu(page)}
                    sx={styles.navList(theme) as CSSProperties}
                >
                    {page}
                </Typography>
            ))}
        </nav>
    );
};

const styles = {
    navHeader: (theme: any) => ({
        fontSize: "1rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        textTransform: "uppercase",
        color: theme.palette.text.secondary,
    }),
    navList: (theme: any) => ({
        listStyleType: "none",
        padding: 0,
        margin: 0,
        lineHeight: "1.8",
        fontSize: "0.9rem",
        color: theme.palette.text.secondary,
        marginBottom: "0.5rem",
        display: "block",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
    }),
    nav: {
        textAlign: "left",
    },
};