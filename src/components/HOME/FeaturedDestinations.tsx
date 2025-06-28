
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  CardActions,
  Button,
} from '@mui/material';

const destinations = [
  {
    name: 'Mt. Kenya',
    image: '/mt,kenya.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vero.',
    price: 'From KES 25,000',
  },
  {
    name: 'Mt. Ruwenzori',
    image: '/ruwenzori.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vero.',
    price: 'From KES 30,000',
  },
  {
    name: 'Lake Nakuru',
    image: '/nakuru.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vero.',
    price: 'From KES 15,000',
  },
  {
    name: 'Tsavo National Park',
    image: '/tsavo1.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vero.',
    price: 'From KES 20,000',
  },
  {
    name: 'Nairobi National Park',
    image: '/national park.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vero.',
    price: 'From KES 10,000',
  },
  {
    name: 'Coastal Kenya',
    image: '/coastal.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, vero.',
    price: 'From KES 18,000',
  },
];

const FeaturedDestinations = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 6,
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Featured Destinations
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {destinations.map((dest, index) => (
          <Grid key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                width: '35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: 3,
                backgroundColor: '#344567',
                color:'#EFEEEA',
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={dest.image}
                alt={dest.name}
              />
              <CardContent sx={{ mt: 0 }}>
                <Typography variant="h6" component="div">
                  {dest.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 ,color:'#EFEEEA',}}>
                  {dest.description}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ mt: 1 , color:'#FFF200' }}>
                  {dest.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Book Now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedDestinations;
