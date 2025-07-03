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
} from "@mui/material";
import { MdEmail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import { TfiLocationPin } from "react-icons/tfi";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const officeHours = [
  { day: "Monday", hours: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
  { day: "Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const ContactUs = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 6,
        mt: 8,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EBD6FB",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          We'd love to hear from you. Reach out today.
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ width: "40rem" }}
      >
        <Grid>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff9ef",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Send us a Message
            </Typography>
            <Box component="form">
              <TextField fullWidth label="Full Name" required margin="normal" />
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                required
                margin="normal"
              />
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
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "primary",
                  color: "#fff",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid sx={{ width: "40rem" }}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff9ef",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Get in Touch
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MdEmail />
                </ListItemIcon>
                <ListItemText primary="zaphtourswithmaish@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FcCellPhone />
                </ListItemIcon>
                <ListItemText primary="+254 702 680 621" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TfiLocationPin />
                </ListItemIcon>
                <ListItemText primary="Murang'a University Main Gate" />
              </ListItem>
            </List>
          </Paper>

          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff9ef",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Find Us
            </Typography>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                height: 250,
                mt: 1,
              }}
            >
              <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507567543376!2d37.14243776956892!3d-0.7151076336458907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828996ce41f9c39%3A0xe9bd5117f20559ee!2sM%C5%A9ranga%20University%20Main%20Gate!5e0!3m2!1sen!2ske!4v1751224103265!5m2!1sen!2ske"
              ></iframe>
            </Box>
          </Paper>
        </Grid>

        <Grid sx={{ width: "40rem" }}>
          <Paper
            sx={{
              pl: 2,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff9ef",
              mb: 3,
              width: "100%",
              display: "flex",
            }}
          >
            <Box textAlign="center" mb={5}>
              <Typography variant="h6">Office Hours</Typography>
            </Box>

            <List dense>
              {officeHours.map(({ day, hours }) => (
                <ListItem key={day}>
                  <ListItemText primary={day} secondary={hours} />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff9ef",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton href="#" color="primary">
                <TbBrandFacebookFilled />
              </IconButton>
              <IconButton href="#" sx={{ color: "#E55050" }}>
                <FaInstagramSquare />
              </IconButton>
              <IconButton href="#" color="primary">
                <FaLinkedin />
              </IconButton>
              <IconButton href="#" sx={{ color: "#000000" }}>
                <BsTwitterX />
              </IconButton>
              <IconButton href="#" sx={{ color: "#E55055" }}>
                <FaYoutube />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
