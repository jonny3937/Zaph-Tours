import { Container, Typography, Grid } from '@mui/material';
import DestinationCard from '../Destinations/DestinationCard';

const destinations = [
  {
    image: './nairobi.jpg',
    name: 'Nairobi, Kenya',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$400',
    soloPrice: '$120',
    link: '#',
  },
  {
    image: ' ./zanzibar.jpg',
    name: 'Zanzibar, Tanzania',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$850',
    soloPrice: '$200',
    link: '#',
  },
  {
    image: './s.a.jpg',
    name: 'Cape Town, South Africa',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$1000',
    soloPrice: '$250',
    link: '#',
  },
   {
    image: ' ./Dubai.jpg',
    name: 'Dubai',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$1500',
    soloPrice: '$650',
    link: '#',
  },
   {
    image: ' ./mombasa.jpg',
    name: 'Mombasa, Kenya',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$1000',
    soloPrice: '$250',
    link: '#',
  },
   {
    image: ' ./kisumu.jpg ',
    name: 'Kisumu, Kenya',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$500',
    soloPrice: '$150',
    link: '#',
  },
     {
    image: ' ./2.jpg ',
    name: 'Victoria, Uganda',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$2300',
    soloPrice: '$1350',
    link: '#',
  },
       {
    image: ' ./3.jpg ',
    name: 'Victoria, Uganda',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$2300',
    soloPrice: '$1350',
    link: '#',
  },
       {
    image: ' ./4.jpg ',
    name: 'Victoria, Uganda',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    groupPrice: '$2300',
    soloPrice: '$1350',
    link: '#',
  },

];

const DestinationsPage = () => {
  return (
    <Container sx={{ mt: 10}}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Top Destinations
      </Typography>
      <Grid container spacing={3} justifyContent="center" >
        {destinations.map((destination, index) => (
          <Grid key={index}>
            <DestinationCard {...destination} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DestinationsPage;
