import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { MdEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const officeHours = [
  { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const ContactUs = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">
        Contact Us
      </Typography>
      <Typography variant="subtitle1">
        We'd love to hear from you. Get in touch with us today!
      </Typography>

      <Grid container spacing={4} mt={2}>
        <Grid>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Send us a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth label="Full Name" required margin="normal" />
              <TextField fullWidth label="Email Address" type="email" required margin="normal" />
              <TextField fullWidth label="Subject" required margin="normal" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                required
                margin="normal"
                placeholder="Tell us how we can help you..."
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6">
              Get in Touch
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><MdEmail /></ListItemIcon>
                <ListItemText primary="zaphtourswithmaish@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon><FcCellPhone /></ListItemIcon>
                <ListItemText primary="+254 702 680 621" />
              </ListItem>
              <ListItem>
                <ListItemIcon><TfiLocationPin /></ListItemIcon>
                <ListItemText
                  primary="Murang'a University Main Gate"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Find Us
            </Typography>
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                height: 250,
                mt: 1,
              }}
            >
              <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                style={{ border: 5 }}
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507567543376!2d37.14243776956892!3d-0.7151076336458907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828996ce41f9c39%3A0xe9bd5117f20559ee!2sM%C5%A9ranga%20University%20Main%20Gate!5e0!3m2!1sen!2ske!4v1751224103265!5m2!1sen!2ske"
              ></iframe>
            </Box>
          </Paper>
        </Grid>

        <Grid>
          <Paper sx={{ p: 3, mb: 3 , ml: 2, height:'20'}}>
            <Typography variant="h6">
              Office Hours
            </Typography>
            <List dense>
              {officeHours.map(({ day, hours }) => (
                <ListItem key={day}>
                  <ListItemText primary={day} secondary={hours} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" color="primary">
                <TbBrandFacebookFilled />
              </IconButton>
              <IconButton href="#" color="primary">
                <FaTwitter />
              </IconButton>
              <IconButton href="#" color="primary">
                <FaLinkedin />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
