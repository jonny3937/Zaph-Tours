import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, Menu, MenuItem, IconButton } from '@mui/material';
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#090040',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Zaph Tours
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={handleMenuClick} sx={{ color: 'white' }}>
              <TiThMenuOutline size={24} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={RouterLink} to="/destination" onClick={handleMenuClose}>
                Destinations
              </MenuItem>
              <MenuItem component={RouterLink} to="/trip-types" onClick={handleMenuClose}>
                Trip Types
              </MenuItem>
              <MenuItem component={RouterLink} to="/contact" onClick={handleMenuClose}>
                Contact Us
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/destination"
              sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}
            >
              Destinations
            </Button>
            <Button
              component={RouterLink}
              to="/trip-types"
              sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}
            >
              Trip Types
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              sx={{ color: 'white', fontWeight: 'bold', textTransform: 'none' }}
            >
              Contact Us
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
