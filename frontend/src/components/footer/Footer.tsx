import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Link as RouterLink } from 'react-router-dom';
import { CONTACT_DETAILS } from '../../data/constants';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  // { name: 'Products', path: '/products' },
  // { name: 'Gallery', path: '/gallery' },
  // { name: 'Blog', path: '/blog' },
  { name: 'Contract Farming Program', path: '/dealer-enquiry' },
];

const socialButtons = [
  { Icon: FacebookIcon, url: CONTACT_DETAILS.social.facebook },
  { Icon: InstagramIcon, url: CONTACT_DETAILS.social.instagram },
  { Icon: LinkedInIcon, url: CONTACT_DETAILS.social.linkedin },
];

const socialButtons = [
  { Icon: FacebookIcon, url: CONTACT_DETAILS.social.facebook },
  { Icon: InstagramIcon, url: CONTACT_DETAILS.social.instagram },
  { Icon: LinkedInIcon, url: CONTACT_DETAILS.social.linkedin },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', pt: 10, pb: 4, fontFamily: 'var(--body-font)' }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* BRAND SECTION */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, color: 'primary.light', letterSpacing: '0.1rem', fontFamily: 'var(--heading-font)' }}>
              BLSEEDS
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500', mb: 4, lineHeight: 1.8, maxWidth: '90%' }}>
              At B.L. Seeds Farm, quality is not a benchmark—it is a philosophy embedded in every decision, every process, and every seed we produce.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialButtons.map(({ Icon, url }, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1rem', fontFamily: 'var(--heading-font)' }}>
              Explore
            </Typography>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                to={link.path}
                underline="none"
                sx={{
                  display: 'block',
                  mb: 2,
                  color: 'grey.500',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'white' },
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          {/* CONTACT INFO */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1rem', fontFamily: 'var(--heading-font)' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <LocationOnIcon sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                {CONTACT_DETAILS.address}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <PhoneIcon sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                <Link href={CONTACT_DETAILS.phoneHref} color="inherit" underline="none">
                  {CONTACT_DETAILS.phone}
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }} />
              <Typography variant="body2" sx={{ color: 'grey.500' }}>
                <Link href={CONTACT_DETAILS.emailHref} color="inherit" underline="none">
                  {CONTACT_DETAILS.email}
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 10, mb: 4, borderColor: 'rgba(255,255,255,0.05)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'grey.700', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} BLSEEDS. All rights reserved.
          </Typography>
          {/* <Box sx={{ display: 'flex', gap: 4 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" sx={{ color: 'grey.700', fontSize: '0.8rem', textDecoration: 'none', '&:hover': { color: 'grey.500' } }}>
                {item}
              </Link>
            ))}
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
}
