
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="fixed" 
    sx={{ backgroundColor: '#090040',
     boxShadow: 'none' 
     }}>
      <Toolbar 
      sx=
      {{ 
        justifyContent: 'space-between'
         }}>
        <Typography variant="h6" component="div"
         sx=
         {{ 
          fontWeight: 'bold' 
          }}>
          Zaph Tours
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}>Home</Button>
          <Button sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}>Destinations</Button>
          <Button sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}>Trip Types</Button>
          <Button sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
