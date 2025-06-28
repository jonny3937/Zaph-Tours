import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { MdStarRate } from "react-icons/md";

const testimonials = [
  {
    quote: 'Zaph Tours made our honeymoon unforgettable! The Mt. Kenya trek was perfectly organized.',
    name: 'Sarah Johnson',
    country: 'United States',
  },
  {
    quote: 'Exceptional service and knowledgeable guides. Our family safari exceeded all expectations!',
    name: 'David Kimani',
    country: 'Kenya',
  },
  {
    quote: 'The coastal Kenya package was paradise. Professional, friendly, and truly magical experience.',
    name: 'Emma Wilson',
    country: 'United Kingdom',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Travelers Say
      </Typography>

      <Grid container spacing={4} justifyContent="space-between">
  {testimonials.map((testimonial, index) => (
    <Grid  key={index} >
      <Card
        sx={{
          maxWidth:'20rem',
          height: '100%',
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap:'10px',
          textAlign:'center',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <CardContent>
          <Box>
            {[...Array(5)].map((_, i) => (
              <MdStarRate key={i} color="gold"  />
            ))}
          </Box>
          <Typography variant="body1" fontStyle="italic" gutterBottom>
            “{testimonial.quote}”
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:'#ED3500'}}>
            {testimonial.country}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </Container>
  );
};

export default TestimonialsSection;
