import { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Stack, Avatar, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { homeFeatures } from '../data/constants';
import founderPhoto from '../assets/Founding Members/Founder photo.jpg';
import mdPhoto from '../assets/Founding Members/MD Photo.png';
import greanPeasFarm from '../assets/Farm/Green Peas Farm.png'
import PeaImage1 from '../assets/Products/PeaImage1.png'
import PeaImage2 from '../assets/Products/PeaImage2.png'
import PeaImage3 from '../assets/Products/PeaImage3.png'

export default function Home() {
  const [activeFounder, setActiveFounder] = useState(0);
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '580px' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          bgcolor: '#f0f4f0'
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 0 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ maxWidth: '650px' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    lineHeight: 1.1,
                    mb: 3,
                    color: '#0a2815',
                    fontWeight: 900
                  }}
                >
                  High Quality <br />
                  <span style={{ color: 'var(--primary-green)' }}>Seeds for Better Yield</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    mb: 5,
                    color: '#1a472a',
                    lineHeight: 1.7,
                    fontWeight: 600
                  }}
                >
                  We provide high germination, disease resistant and <br />
                  best quality seeds for every kind of crop.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: 'var(--primary-green)',
                      px: 4, py: 1.8,
                      fontSize: '0.9rem',
                      fontWeight: 800
                    }}
                    component={RouterLink}
                    to="/products"
                  >
                    EXPLORE PRODUCTS
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CallIcon />}
                    sx={{
                      borderColor: '#1a472a',
                      color: 'white',
                      px: 4, py: 1.8,
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      bgcolor: '#1a472a',
                    }}
                    component={RouterLink}
                    to="/contact"
                  >
                    CONTACT US
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="https://www.agrifarming.in/wp-content/uploads/Ultimate-Guide-to-Green-Peas-Matar-Farming-5.jpg"
                sx={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            backgroundImage: `url(${greanPeasFarm})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.40,
            zIndex: 1
          }}
        />
      </Box>

      {/* FEATURES ROW */}
      <Box sx={{ py: 6, borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTllmrNuh0jlmsUfDu5F8EDHRwm2x7AX145w&s")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Dark overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            bgcolor: 'rgba(10, 40, 15, 0.78)',
            zIndex: 1
          }}
        />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {homeFeatures.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 50, height: 50,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a8d5a2',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.65)', display: 'block', mt: 0.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* OUR TOP PRODUCTS */}
      {/* <Box sx={{ py: 12, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          <SectionHeader title="Our Top" highlight="Products" />

          <Grid container spacing={4}>
            {allProducts.slice(0, 5).map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                <ProductCard product={product} variant="home" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* STATS SECTION */}
      {/* <Box sx={{ py: 5, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVaY5qBMrsh-GaV5AaaIB2XK9LTwEDlPHFw&s")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            bgcolor: 'rgba(10, 40, 15, 0.82)',
            zIndex: 1
          }}
        />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {homeStats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: 'white' }}>
                  {stat.val}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#a8d5a2' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* ABOUT US SNIPPET */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'var(--primary-green)', fontWeight: 800, letterSpacing: '0.1rem' }}>
                ABOUT US
              </Typography>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mt: 1, mb: 3, fontWeight: 900 }}>
                Committed to Excellence in <br />
                <span style={{ color: 'var(--primary-green)' }}>Agricultural Innovation</span>
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                At B.L. Seeds Farm, our mission is to provide farmers with seeds that consistently

                deliver strong performance in the field. We focus on developing and supplying high-
                quality seeds that support better yields, healthy crop growth, and reliable results

                across different farming conditions.
              </Typography>
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                sx={{ bgcolor: '#1a472a', px: 4, py: 1.5, fontWeight: 800 }}
              >
                READ MORE
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Box
                    component="img"
                    src={PeaImage1}
                    sx={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' }}
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Stack spacing={2}>
                    <Box
                      component="img"
                      src={PeaImage2}
                      sx={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                    <Box
                      component="img"
                      src={PeaImage3}
                      sx={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '15px' }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FROM THE FOUNDERS */}
      <Box sx={{ py: 8, bgcolor: '#f7faf8' }}>
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'var(--primary-green)', fontWeight: 800, letterSpacing: '0.15rem', fontSize: '0.85rem' }}>
              OUR LEADERSHIP
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 900, mt: 1 }}>
              From the{' '}
              <span style={{ color: 'var(--primary-green)' }}>Founders</span>
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: 'var(--primary-green)', borderRadius: 2, mx: 'auto', mt: 2 }} />
          </Box>

          <Box sx={{ position: 'relative', px: { xs: 0, md: 6 } }}>
            {/* Navigation Arrows */}
            <IconButton
              onClick={() => setActiveFounder((prev) => (prev === 0 ? 1 : 0))}
              sx={{
                position: 'absolute',
                left: { xs: 0, md: -20 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                '&:hover': { bgcolor: '#f0f4f0' },
                display: 'flex'
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              onClick={() => setActiveFounder((prev) => (prev === 1 ? 0 : 1))}
              sx={{
                position: 'absolute',
                right: { xs: 0, md: -20 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                '&:hover': { bgcolor: '#f0f4f0' },
                display: 'flex'
              }}
            >
              <ArrowForwardIcon />
            </IconButton>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
              {/* Founder 1 */}
              <Box
                sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  width: '100%',
                  bgcolor: 'white',
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', md: 'row' },
                  overflow: 'hidden',
                  position: 'relative',
                  opacity: activeFounder === 0 ? 1 : 0,
                  visibility: activeFounder === 0 ? 'visible' : 'hidden',
                  transform: activeFounder === 0 ? 'scale(1)' : 'scale(0.98)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: activeFounder === 0 ? 'auto' : 'none',
                }}
              >
                {/* Left side: text */}
                <Box sx={{ flex: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: 5, bottom: 0, bgcolor: 'var(--primary-green)', display: { xs: 'none', md: 'block' } }} />
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, bgcolor: 'var(--primary-green)', display: { xs: 'block', md: 'none' } }} />

                  <Typography sx={{ fontSize: '3rem', lineHeight: 0.8, color: 'var(--primary-green)', opacity: 0.1, fontFamily: 'Georgia, serif', fontWeight: 900, mb: -1.5 }}>
                    “
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', fontStyle: 'italic', mb: 3, position: 'relative', zIndex: 1, maxHeight: '180px', overflowY: 'auto', pr: 2, '&::-webkit-scrollbar': { width: '4px' }, '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.1)', borderRadius: '4px' } }}>
                    "Dear Farmers & Valued Partners,<br />

                    For the past 35 years, B.L. Seeds Farm has been dedicated to serving the farming community with commitment and integrity. Our journey has always been guided by one simple goal – to provide high-quality, reliable seeds that help farmers achieve better yields and success.<br />
                    With decades of experience, hard work, and the trust of our farmers, we have grown steadily while staying true to our roots. We have embraced modern agricultural practices, yet we continue to uphold the traditional values that define us.<br />
                    We strongly believe that a good seed is the foundation of a successful harvest. With this belief, we remain committed to supporting every farmer’s growth and prosperity.<br />
                    Your trust and support are our greatest strengths, and we will continue to serve you with the same dedication in the years to come.<br />
                    Thank you for being a part of our journey.
                    "
                  </Typography>

                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: 'var(--text-primary)', mb: 0.5 }}>
                      Bharat Singh Pal
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'var(--primary-green)', fontWeight: 700, letterSpacing: '0.05rem' }}>
                      Founder & Proprietor<br />
                      B.L. Seeds Farm
                    </Typography>
                  </Box>
                </Box>

                {/* Right side: image */}
                <Box sx={{ width: { xs: '100%', md: '45%', lg: '40%' }, minHeight: { xs: '300px', md: '100%' }, position: 'relative', bgcolor: '#f4f7f4' }}>
                  <Box component="img" src={founderPhoto} alt="Founder" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: { xs: 'contain', md: 'cover' }, objectPosition: 'top center', p: { xs: 2, md: 0 } }} />
                </Box>
              </Box>

              {/* MD / Co-Founder */}
              <Box
                sx={{
                  gridColumn: 1,
                  gridRow: 1,
                  width: '100%',
                  bgcolor: 'white',
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', md: 'row' },
                  overflow: 'hidden',
                  position: 'relative',
                  opacity: activeFounder === 1 ? 1 : 0,
                  visibility: activeFounder === 1 ? 'visible' : 'hidden',
                  transform: activeFounder === 1 ? 'scale(1)' : 'scale(0.98)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: activeFounder === 1 ? 'auto' : 'none',
                }}
              >
                {/* Left side: text */}
                <Box sx={{ flex: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: 0, left: 0, width: 5, bottom: 0, bgcolor: '#2e7d32', display: { xs: 'none', md: 'block' } }} />
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, bgcolor: '#2e7d32', display: { xs: 'block', md: 'none' } }} />

                  <Typography sx={{ fontSize: '3rem', lineHeight: 0.8, color: '#2e7d32', opacity: 0.1, fontFamily: 'Georgia, serif', fontWeight: 900, mb: -1.5 }}>
                    “
                  </Typography>

                  <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', fontStyle: 'italic', mb: 3, position: 'relative', zIndex: 1, maxHeight: '180px', overflowY: 'auto', pr: 2, '&::-webkit-scrollbar': { width: '4px' }, '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.1)', borderRadius: '4px' } }}>
                    "Dear Farmers & Valued Partners,<br />
                    At B.L. Seeds Farm, we are committed to delivering excellence through high-quality seeds that ensure better productivity and sustainable growth. As a Managing Director, my vision is to combine traditional farming values with modern agricultural innovation.<br />
                    We specialize in premium green pea seeds, developed with care, research, and field experience to give you the best results. Our focus is not just on seeds, but on building long-term trust and success for every farmer associated with us.<br />
                    We believe that strong seeds create strong harvests, and strong relationships create a successful future. Your trust inspires us to continuously improve and serve you better.<br />
                    Thank you for being a part of our journey."
                  </Typography>

                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: 'var(--text-primary)', mb: 0.5 }}>
                      Om Baghel
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#2e7d32', fontWeight: 700, letterSpacing: '0.05rem' }}>
                      Managing Director<br />
                      B.L. Seeds Farm
                    </Typography>
                  </Box>
                </Box>

                {/* Right side: image */}
                <Box sx={{ width: { xs: '100%', md: '45%', lg: '40%' }, minHeight: { xs: '300px', md: '100%' }, position: 'relative', bgcolor: '#f4f7f4' }}>
                  <Box component="img" src={mdPhoto} alt="Managing Director" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: { xs: 'contain', md: 'cover' }, objectPosition: 'top center', p: { xs: 2, md: 0 } }} />
                </Box>
              </Box>
            </Box>

            {/* Mobile Navigation Dots */}
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mt: 4 }}>
              <Box
                onClick={() => setActiveFounder(0)}
                sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: activeFounder === 0 ? 'var(--primary-green)' : '#e5e7eb', cursor: 'pointer', transition: 'background-color 0.3s' }}
              />
              <Box
                onClick={() => setActiveFounder(1)}
                sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: activeFounder === 1 ? '#2e7d32' : '#e5e7eb', cursor: 'pointer', transition: 'background-color 0.3s' }}
              />
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      {/* <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <SectionHeader title="What" highlight="Farmers Say" />

          <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', bgcolor: '#fbfcfb', p: { xs: 4, md: 8 }, borderRadius: '30px', position: 'relative' }}>
            <Typography variant="h2" sx={{ position: 'absolute', top: 20, left: 40, fontSize: '5rem', color: 'var(--primary-green)', opacity: 0.1, fontFamily: 'serif' }}>
              "
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-primary)', mb: 4, lineHeight: 1.8 }}>
              "{testimonials[0].text}"
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Avatar
                src={testimonials[0].img}
                sx={{ width: 60, height: 60 }}
              />
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.1rem' }}>{testimonials[0].name}</Typography>
                <Typography variant="body2" sx={{ color: 'var(--primary-green)', fontWeight: 700 }}>{testimonials[0].role}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', mt: 4 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'var(--primary-green)' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e5e7eb' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e5e7eb' }} />
            </Stack>
          </Box>
        </Container>
      </Box> */}

      {/* DEALER CTA BANNER */}
      <Box sx={{ py: 6, bgcolor: '#f0f7f2', mx: { md: 4 }, borderRadius: { md: '20px' }, mb: 10 }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{ px: { md: 6 }, justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
              <Avatar
                sx={{ width: 80, height: 80, bgcolor: 'var(--primary-green)' }}
              >
                <CallIcon sx={{ fontSize: '2.5rem' }} />
              </Avatar>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, mb: 0.5 }}>
                  Become Our Dealer / Distributor
                </Typography>
                <Typography variant="body1" sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Join us and grow your business with premium quality seeds.
                </Typography>
              </Box>
            </Stack>
            <Button
              component={RouterLink}
              to="/dealer-enquiry"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'var(--primary-green)',
                px: 5, py: 2,
                borderRadius: '10px',
                fontWeight: 900,
                fontSize: '1rem'
              }}
            >
              ENQUIRE NOW
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* WHATSAPP FLOAT */}
      {/* <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.1)' }
        }}
      >
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          sx={{ width: 60, height: 60 }}
        />
      </Box> */}
    </Box>
  );
}
