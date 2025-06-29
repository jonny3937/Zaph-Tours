import { Box, Grid, Typography, Card, CardContent, CardMedia, Divider } from '@mui/material';

interface TripPackage {
  title: string;
  images: string[];
  description: string;
  pricing: string;
}

const packages: TripPackage[] = [
  {
    title: 'Honeymoon',
    images: ['/honey2.jpg'],
    description: 'Romantic getaways designed for newlyweds, featuring luxurious accommodations, private dinners, and stunning destinations.',
    pricing: 'From $2,500 per couple - 10% off for early bookings'
  },
  {
    title: 'Family',
    images: ['/family.jpg'],
    description: 'Fun-filled family adventures with activities for all ages. Safe, educational, and enjoyable experiences tailored for families.',
    pricing: 'From $1,800 for a family of four'
  },
  {
    title: 'Adventure',
    images: ['/adventure.jpg'],
    description: 'Thrilling adventures including hiking, rafting, mountain biking, and more for the adrenaline junkies.',
    pricing: 'From $1,200 per person'
  },
  {
    title: 'Cultural Tours',
    images: ['/cultural.jpg'],
    description: 'Immerse yourself in the local cultures with guided heritage tours, traditional performances, and artisan workshops.',
    pricing: 'From $950 per person'
  },
  {
    title: 'Wildlife Safaris',
    images: ['/wildlife.jpg'],
    description: 'Explore the wild on guided safaris in renowned game reserves and national parks.',
    pricing: 'From $2,200 per person'
  },
  {
    title: 'Eco-Tours',
    images: ['/eco.jpg'],
    description: 'Eco-friendly tours that promote sustainable travel and conservation awareness.',
    pricing: 'From $1,000 per person'
  },
  {
    title: 'Luxury Vacations',
    images: ['/luxury.jpg'],
    description: 'Top-tier experiences in 5-star resorts with exclusive services and amenities.',
    pricing: 'From $4,000 per person'
  },
  {
    title: 'Beach Holidays',
    images: ['/beach.jpg'],
    description: 'Relax on pristine beaches with crystal-clear waters and palm-lined shores.',
    pricing: 'From $1,500 per person'
  },
  {
    title: 'Wellness Retreats',
    images: ['/well.jpg'],
    description: 'Rejuvenate your mind and body with yoga, meditation, and spa treatments.',
    pricing: 'From $1,800 per person'
  },
  {
    title: 'Culinary Tours',
    images: ['/Culinary.jpg'],
    description: 'Taste your way through different cultures with food tastings, cooking classes, and market tours.',
    pricing: 'From $1,200 per person'
  }
];

const TripTypesPage = () => {
  return (
    <Box p={4} sx={{ mt: 8 , backgroundColor:'#000000', justifyItems:'center', color:'#FFFCFB'}}>
      <Typography variant="h4" gutterBottom>
        Explore Our Trip Packages
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Grid key={index} sx={{ minWidth:'100%'}}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={pkg.images[0]}
                alt={`${pkg.title} package`}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {pkg.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  {pkg.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {pkg.pricing}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TripTypesPage;
