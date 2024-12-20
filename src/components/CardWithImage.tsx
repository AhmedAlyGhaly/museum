import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface CardWithImageProps {
    image?: string;
    titleImage?: string;
    title?: string;
    description?: string;
    onClick?: () => void;
}

export const CardWithImage: React.FC<CardWithImageProps> = ({
    image,
    titleImage,
    title,
    description,
    onClick
}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={image} title={titleImage ?? 'Image'} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClick}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
