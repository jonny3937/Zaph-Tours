
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

type Props = {
  image: string;
  name: string;
  description: string;
  groupPrice: string;
  soloPrice: string;
  link: string;
};

const DestinationCard: React.FC<Props> = ({ image, name, description, groupPrice, soloPrice, link }) => {
  return (
    <Card sx={{minWidth: 360, mb: 1 ,  backgroundColor:'#344567', color:'#FFFCFB'}}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}

      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 , color:'#FFFCFB'}}>
          {description}
        </Typography>
        <Typography variant="body2"><strong>Group Price:</strong> {groupPrice}</Typography>
        <Typography variant="body2"><strong>Solo Price:</strong> {soloPrice}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" href={link}>View Details</Button>
      </CardActions>
    </Card>
  );
};

export default DestinationCard;
