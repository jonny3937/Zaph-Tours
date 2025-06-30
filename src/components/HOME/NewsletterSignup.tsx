import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { FaRegBell } from "react-icons/fa";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <Box sx={{ 
      backgroundColor: '#FEEBF6', 
      py: 6,
      px: 2,
      width: '100%', 
      boxSizing: 'border-box' 
    }}>
      <Box sx={{ 
        maxWidth: 'sm', 
        margin: '0 auto',
        width: '100%'
      }}>
        <Typography variant="h4" align="center" gutterBottom>
          Stay Updated on Adventures
        </Typography>
        <Typography variant="body1" align="center" mb={3}>
          Subscribe to our newsletter for weekly updates on safaris, adventures, and exclusive deals
        </Typography>
        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Thanks for subscribing!
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            type="email"
            label="Enter your email address"
            variant="outlined"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth 
          />
          <Button 
            type="submit" 
            variant="outlined" 
            size="large" 
            sx={{ textTransform: 'none' }}
            fullWidth
          >
            Subscribe <FaRegBell style={{ marginLeft: 8 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsletterSignup;