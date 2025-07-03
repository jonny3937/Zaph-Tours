import { Box, Grid, Typography, IconButton, Stack, Link } from "@mui/material";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTime, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1b1b1b",
        color: "#fff",
        pt: 8,
        pb: 4,
        px: 2,
        width: "100%",
        margin: 0,
      }}
    >
      <Grid container spacing={4}>
        <Grid>
          <Typography variant="h6" gutterBottom>
            Zaph Tours
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
            Kenya's premier safari and adventure company, creating unforgettable
            experiences since 2008.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="facebook" color="inherit">
              <FaFacebookSquare />
            </IconButton>
            <IconButton aria-label="twitter" color="inherit">
              <FaTwitter />
            </IconButton>
            <IconButton aria-label="instagram" color="inherit">
              <FaInstagramSquare />
            </IconButton>
            <IconButton aria-label="youtube" color="inherit">
              <FaYoutube />
            </IconButton>
          </Stack>
        </Grid>

        <Grid>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {["Destinations", "Trip Types", "About Us", "Contact", "Blog"].map(
              (text) => (
                <Link key={text} href="#" color="inherit" underline="hover">
                  {text}
                </Link>
              ),
            )}
          </Stack>
        </Grid>

        <Grid>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          <Stack spacing={1} sx={{ color: "#ccc" }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CiLocationOn fontSize="small" />
              <Typography variant="body2">Nairobi, Kenya</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <FaPhoneAlt fontSize="small" />
              <Typography variant="body2">+254 700 123 456</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MdEmail fontSize="small" />
              <Typography variant="body2">info@zaphtours.co.ke</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MdAccessTime fontSize="small" />
              <Typography variant="body2">Mon–Fri: 8AM–6PM</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Box mt={5} textAlign="center">
        <Typography variant="body2" sx={{ color: "gray" }}>
          © {new Date().getFullYear()} Zaph Tours. All rights reserved. | Best
          Safaris and Adventures
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
