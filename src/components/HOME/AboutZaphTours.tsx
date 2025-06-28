
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const AboutZaphTours = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        About Zaph Tours
      </Typography>
      <Grid container spacing={4} justifyContent="space-between" alignItems="stretch">
        <Grid>
          <Card
            sx={{
              width: '35rem',
              backgroundColor: '#344567',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3,
              color:'#EFEEEA',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About Zaph Tours
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color:'#EFEEEA', }}>
                Zaph Tours is Kenya's premier travel company, specializing in unforgettable safaris and adventure tours.
                With over 15 years of experience, we've been crafting extraordinary journeys that showcase the natural
                beauty and cultural richness of Kenya and East Africa.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text" sx={{ color:'#FFF200' }}>
                Learn More About Us
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid>
          <Card
            sx={{
              backgroundColor: '#344567',
              width: '35rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3,
              color:'#EFEEEA',
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                Your Journey, Our Passion
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color:'#EFEEEA', }}>
                Our expert guides, commitment to sustainable tourism, and passion for adventure ensure that every traveler
                experiences the magic of Africa. From thrilling wildlife encounters to serene mountain expeditions, we
                create memories that last a lifetime.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text" sx={{ color:'#FFF200' }}>
                Learn More About Us
              </Button>
            </CardActions>
          </Card>
        </Grid>
         <Grid>
          <Card
            sx={{
              backgroundColor: '#344567',
              width: '35rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3,
               color:'#EFEEEA',
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color:'#EFEEEA', }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus a esse deserunt debitis quae necessitatibus, ducimus quasi molestias quis suscipit, repellat sint eius minus ipsa magni nostrum laborum quam atque quaerat fuga dolores ex dolore. A qui unde, illo quasi suscipit, molestias, ab quia nulla nobis sapiente tenetur deleniti repellendus.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text" sx={{ color:'#FFF200' }}>
                Learn More About Us
              </Button>
            </CardActions>
          </Card>
        </Grid>
         <Grid>
          <Card
            sx={{
              backgroundColor: '#344567',
              width: '35rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3,
              color:'#EFEEEA',
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color:'#EFEEEA', }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam quidem in perspiciatis tempore? Fuga illo cupiditate itaque nam temporibus eveniet nesciunt suscipit tempora, quam quo veniam! Architecto earum, quo laudantium ipsa impedit in tempora sapiente animi velit ullam ducimus atque corporis odit? Reprehenderit eligendi aperiam repellendus sunt a officia!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="text" sx={{ color:'#FFF200' }}>
                Learn More About Us
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutZaphTours;
