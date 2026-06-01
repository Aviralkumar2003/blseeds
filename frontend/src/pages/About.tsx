import { Box, Container, Typography, Grid, Stack, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageHero from '../components/common/PageHero';
import QualityTesting from '../assets/Quality Standards/Testing.png';
import Storage from '../assets/Quality Standards/Storage Facility.png';
import Processing from '../assets/Quality Standards/Factory.png';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <Box>
      <PageHero
        title={t('about.page_hero_title')}
        breadcrumbs={[t('navbar.home'), t('about.page_hero_title')]}
        description={t('about.page_hero_desc')}
        bgColor="#f9f7f2"
        bgImage="https://t3.ftcdn.net/jpg/03/48/58/60/360_F_348586063_Qet050UULnm7C4IR4kzhnzUrcvQt7SQN.jpg"
        darkTheme={true}
      // rightContent={
      //   <Box
      //     component="img"
      //     src={farmImage}
      //     sx={{
      //       width: '100%',
      //       borderRadius: '20px',
      //       boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      //     }}
      //   />
      // }
      />

      {/* WHO WE ARE */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: 'stretch' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2044&auto=format&fit=crop"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  minHeight: { xs: '350px', md: 'auto' }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'var(--primary-green)', fontWeight: 800, letterSpacing: '0.1rem', fontSize: '2.0rem' }}>
                {t('about.who_we_are_title')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 3, fontSize: '1.05rem' }}>
                {t('about.who_we_are_p1')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                {t('about.who_we_are_p2')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                {t('about.who_we_are_p3')}
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontFamily: 'cursive', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                  {t('about.founder_name')}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.5 }}>
                  {t('about.founder_title')}
                </Typography>
                <Typography variant="caption" sx={{ color: 'var(--primary-green)', fontWeight: 800 }}>
                  {t('about.founder_company')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* OUR VALUES */}
      {/* <Box sx={{ py: 10, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          <SectionHeader title="OUR" highlight="VALUES" />

          <Grid container spacing={4}>
            {aboutValues.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box
                    sx={{
                      width: 80, height: 80,
                      borderRadius: '15px',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-green)',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1rem', mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {value.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* OUR JOURNEY */}
      {/* <Box sx={{ py: 12 }}>
        <Container maxWidth="xl">
          <SectionHeader title="OUR" highlight="JOURNEY" />

          <Box sx={{ position: 'relative', px: { md: 10 } }}>
            <Box
              sx={{
                position: 'absolute',
                top: 40, left: 0, right: 0,
                height: '2px',
                bgcolor: '#e5e7eb',
                zIndex: 1,
                display: { xs: 'none', md: 'block' }
              }}
            />
            <Grid container spacing={4}>
              {aboutJourney.map((step, index) => (
                <Grid size={{ xs: 12, md: 2.4 }} key={index} sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80, height: 80,
                        borderRadius: '50%',
                        bgcolor: 'var(--primary-green)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: '0 10px 20px rgba(11, 93, 30, 0.2)',
                        border: '5px solid white'
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>{step.year}</Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.1rem' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box> */}

      {/* WHY CHOOSE US */}
      <Box sx={{ py: 12, bgcolor: '#14532d', color: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 4, fontWeight: 700, color: 'var(--accent-gold)' }}>
                {t('about.why_choose_title')}
              </Typography>
              <List sx={{ mb: 4 }}>
                {[
                  t('about.why_choose_list_1'),
                  t('about.why_choose_list_2'),
                  t('about.why_choose_list_3'),
                  t('about.why_choose_list_4'),
                  t('about.why_choose_list_5'),
                  t('about.why_choose_list_6')
                ].map((item, index) => (
                  <ListItem key={index} disableGutters sx={{ py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40, color: 'var(--accent-gold)' }}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--accent-gold)' }}>{item}</Typography>} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '350px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      mb: 2
                    }}
                  >
                    <Box
                      component="img"
                      src={QualityTesting}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        bgcolor: 'rgba(11, 93, 30, 0.8)', p: 1.5, textAlign: 'center'
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'var(--accent-gold)' }}>{t('about.quality_testing')}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '250px',
                      borderRadius: '15px',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      component="img"
                      src={Processing}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        bgcolor: 'rgba(11, 93, 30, 0.8)', p: 1.5, textAlign: 'center'
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'var(--accent-gold)' }}>{t('about.advanced_processing')}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '250px',
                      borderRadius: '15px',
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      component="img"
                      src={Storage}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        bgcolor: 'rgba(11, 93, 30, 0.8)', p: 1.5, textAlign: 'center'
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'var(--accent-gold)' }}>{t('about.safe_hygienic_storage')}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* STATS ROW (Re-using from Home but with about styling) */}
      {/* <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {[
              { val: "5000+", label: "Happy Farmers" },
              { val: "120+", label: "Quality Products" },
              { val: "15+", label: "Years of Experience" },
              { val: "20+", label: "States Covered" },
            ].map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index} sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: 'var(--primary-green)' }}>
                  {stat.val}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* BOTTOM CTA */}
      <Box sx={{ py: 10, bgcolor: 'var(--primary-green)', color: 'white' }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                {t('about.bottom_cta_title')}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem', color: 'white' }}>
                {t('about.bottom_cta_desc')}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 5, py: 2,
                fontWeight: 800,
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
              }}
              component={RouterLink}
              to="/contact"
            >
              {t('about.bottom_cta_btn')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
