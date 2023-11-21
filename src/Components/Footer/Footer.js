import React from 'react';
import { Container, Grid, IconButton, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GetAppIcon from '@mui/icons-material/GetApp';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2196F3', padding: '20px', marginTop: 'auto' }}>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body2" color="textSecondary" style={{ color: '#fff' }}>
              <Link href="#" color="inherit">
                Privacy Settings
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ color: '#fff' }}>
              <Link href="#" color="inherit">
                Terms of Use
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <GetAppIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
