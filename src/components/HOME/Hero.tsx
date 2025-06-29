import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          component="video"
          src="../18974448-uhd_3840_2160_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            mb: 2,
            zIndex: 1,
          }}
        >
          Best Safaris and Adventures
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
            mb: 4,
            zIndex: 1,
          }}
        >
          Explore the world with us. Discover Kenya's untamed beauty
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#090040',
            '&:hover': { backgroundColor: '#06923E' },
            color: '#fff',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            borderRadius: '8px',
            zIndex: 1,
          }}
        >
          Start Your Adventure
        </Button>
      </Box>
    </>
  );
};

export default Hero;
