import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  useTheme,
  alpha
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Material Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceIcon from '@mui/icons-material/Science';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ShieldIcon from '@mui/icons-material/Shield';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import BugReportIcon from '@mui/icons-material/BugReport';

// Assets
import QualityTesting from '../assets/Quality Standards/Testing.png';
import Storage from '../assets/Quality Standards/Storage Facility.png';
import Processing from '../assets/Quality Standards/Factory.png';
import FarmImage from '../assets/Farm/Green Peas Farm.png';

// Common Components
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';

export default function QualityAssurance() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: 'var(--bg-color)' }}>
      {/* 1. HERO SECTION */}
      <PageHero
        title={t('quality.hero_title')}
        breadcrumbs={[t('navbar.home'), t('quality.hero_title')]}
        description={t('quality.hero_desc')}
        bgColor="var(--primary-green)"
        bgImage="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop"
        darkTheme={true}
      />

      {/* 2. QUALITY MANAGEMENT INTRO */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'var(--primary-green)',
                  fontWeight: 800,
                  letterSpacing: '0.15rem',
                  fontSize: '0.95rem',
                  display: 'block',
                  mb: 1
                }}
              >
                {t('quality.intro_subtitle')}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: { xs: '2.2rem', md: '3.2rem' },
                  lineHeight: 1.2,
                  mb: 4,
                  fontFamily: 'var(--heading-font)'
                }}
              >
                {t('quality.intro_title')}
              </Typography>

              <Stack spacing={3} sx={{ mb: 5 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--text-primary)',
                    fontSize: '1.15rem',
                    lineHeight: 1.7,
                    fontWeight: 500
                  }}
                >
                  {t('quality.intro_p1')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8
                  }}
                >
                  {t('quality.intro_p2')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8
                  }}
                >
                  {t('quality.intro_p3')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8
                  }}
                >
                  {t('quality.intro_p4')}
                </Typography>
              </Stack>

              {/* Elegant Quote block */}
              <Box
                sx={{
                  borderLeft: '5px solid var(--accent-gold)',
                  bgcolor: alpha('#f59e0b', 0.08),
                  p: 3,
                  borderRadius: '0 16px 16px 0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontStyle: 'italic',
                    fontWeight: 700,
                    color: 'var(--primary-green)',
                    fontFamily: 'var(--heading-font)'
                  }}
                >
                  {t('quality.intro_quote')}
                </Typography>
              </Box>
            </Grid>

            {/* Right Interactive Card & Badge Visual */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative' }}>
                {/* Background decorative blob */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    bgcolor: alpha('#059669', 0.06),
                    filter: 'blur(50px)',
                    zIndex: 0
                  }}
                />

                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 60px rgba(6, 78, 59, 0.08)',
                    zIndex: 1,
                    border: '1px solid rgba(255,255,255,0.8)',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 30px 70px rgba(6, 78, 59, 0.12)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={FarmImage}
                    alt="B.L Seeds Farm Quality Production"
                    sx={{
                      width: '100%',
                      height: '480px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(6,78,59,0.85) 0%, rgba(6,78,59,0.1) 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 4,
                      color: 'white'
                    }}
                  >
                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 1 }}>
                      <WorkspacePremiumIcon sx={{ color: 'var(--accent-gold)', fontSize: '2.5rem' }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', mb: 0.2 }}>
                          {t('quality.badge_title_1')}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                          {t('quality.badge_desc_1')}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>

                {/* Floating trust badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: 40,
                    bgcolor: 'var(--accent-gold)',
                    color: 'var(--text-primary)',
                    borderRadius: '16px',
                    p: '16px 24px',
                    boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    border: '2px solid white'
                  }}
                >
                  <Box sx={{ bgcolor: 'white', borderRadius: '50%', p: 0.5, display: 'flex' }}>
                    <CheckCircleIcon sx={{ color: 'var(--accent-gold)', fontSize: '1.6rem' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 900, fontSize: '1rem', leadingHeight: 1 }}>
                      {t('quality.badge_title_2')}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', opacity: 0.9 }}>
                      {t('quality.badge_desc_2')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. OPERATIONS PILLARS (THE THREE PILLARS) */}
      <Box sx={{ py: 10, bgcolor: 'rgba(5, 150, 105, 0.02)' }}>
        <Container maxWidth="xl">
          <SectionHeader title={t('quality.pillars_title')} highlight={t('quality.pillars_highlight')} />

          {/* PILLAR 1: SEED PROCESSING */}
          <Grid container spacing={8} sx={{ alignItems: 'center', mb: { xs: 12, md: 16 } }}>
            {/* Left Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                  transition: 'transform 0.4s ease',
                  '&:hover': { transform: 'scale(1.02)' }
                }}
              >
                <Box
                  component="img"
                  src={Processing}
                  alt="High accuracy seed processing machinery"
                  sx={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--primary-green)',
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  {t('quality.pillar1_badge')}
                </Box>
              </Box>
            </Grid>

            {/* Right Text Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: 'var(--secondary-green)', fontWeight: 800, letterSpacing: '0.1rem' }}
              >
                {t('quality.pillar1_subtitle')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '2.2rem',
                  mb: 3,
                  fontFamily: 'var(--heading-font)'
                }}
              >
                {t('quality.pillar1_title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}
              >
                {t('quality.pillar1_p1')}
              </Typography>

              {/* Sub Process List */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: 'var(--text-primary)' }}>
                  {t('quality.pillar1_list_title')}
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { title: t('quality.pillar1_l1_t'), desc: t('quality.pillar1_l1_d'), icon: <AutoAwesomeIcon /> },
                    { title: t('quality.pillar1_l2_t'), desc: t('quality.pillar1_l2_d'), icon: <LayersIcon /> },
                    { title: t('quality.pillar1_l3_t'), desc: t('quality.pillar1_l3_d'), icon: <CheckCircleIcon /> }
                  ].map((step, idx) => (
                    <Grid size={{ xs: 12, sm: 6, md: 12 }} key={idx}>
                      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            bgcolor: 'rgba(5, 150, 105, 0.1)',
                            color: 'var(--secondary-green)',
                            borderRadius: '10px',
                            p: 1,
                            display: 'flex'
                          }}
                        >
                          {step.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                            {step.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                            {step.desc}
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Typography
                variant="body2"
                sx={{ color: 'var(--text-secondary)', lineHeight: 1.7, mb: 4 }}
              >
                {t('quality.pillar1_p2')}
              </Typography>

              {/* Result badge */}
              <Box
                sx={{
                  bgcolor: 'rgba(6, 78, 59, 0.05)',
                  borderLeft: '4px solid var(--primary-green)',
                  p: 2,
                  borderRadius: '0 12px 12px 0'
                }}
              >
                <Typography sx={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <strong>{t('quality.result_label')}</strong> {t('quality.pillar1_result')}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* PILLAR 2: COLD STORAGE FACILITY */}
          <Grid container spacing={8} sx={{ alignItems: 'center', mb: { xs: 12, md: 16 } }}>
            {/* Left Text Content */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography
                variant="overline"
                sx={{ color: 'var(--secondary-green)', fontWeight: 800, letterSpacing: '0.1rem' }}
              >
                {t('quality.pillar2_subtitle')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '2.2rem',
                  mb: 3,
                  fontFamily: 'var(--heading-font)'
                }}
              >
                {t('quality.pillar2_title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}
              >
                {t('quality.pillar2_p1')}
              </Typography>

              {/* Scientific storage metric cards */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  { title: t('quality.pillar2_l1_t'), desc: t('quality.pillar2_l1_d'), icon: <AcUnitIcon />, color: '#0ea5e9' },
                  { title: t('quality.pillar2_l2_t'), desc: t('quality.pillar2_l2_d'), icon: <WaterDropIcon />, color: '#10b981' },
                  { title: t('quality.pillar2_l3_t'), desc: t('quality.pillar2_l3_d'), icon: <ShieldIcon />, color: '#f59e0b' }
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: '16px',
                        border: '1px solid rgba(0,0,0,0.04)',
                        bgcolor: 'white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.5, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            bgcolor: alpha(item.color, 0.1),
                            color: item.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, color: 'var(--text-primary)', fontSize: '0.85rem' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', lineHeight: 1.4 }}>
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Typography
                variant="body2"
                sx={{ color: 'var(--text-secondary)', lineHeight: 1.7, mb: 4 }}
              >
                {t('quality.pillar2_p2')}
              </Typography>

              {/* Result badge */}
              <Box
                sx={{
                  bgcolor: 'rgba(6, 78, 59, 0.05)',
                  borderLeft: '4px solid var(--primary-green)',
                  p: 2,
                  borderRadius: '0 12px 12px 0'
                }}
              >
                <Typography sx={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <strong>{t('quality.result_label')}</strong> {t('quality.pillar2_result')}
                </Typography>
              </Box>
            </Grid>

            {/* Right Image */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                  transition: 'transform 0.4s ease',
                  '&:hover': { transform: 'scale(1.02)' }
                }}
              >
                <Box
                  component="img"
                  src={Storage}
                  alt="High quality controlled cold storage facility"
                  sx={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--primary-green)',
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  {t('quality.pillar2_badge')}
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* PILLAR 3: SEED TESTING & TREATMENT */}
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            {/* Left Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                  transition: 'transform 0.4s ease',
                  '&:hover': { transform: 'scale(1.02)' }
                }}
              >
                <Box
                  component="img"
                  src={QualityTesting}
                  alt="Agronomists evaluating seed samples in lab"
                  sx={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--primary-green)',
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  {t('quality.pillar3_badge')}
                </Box>
              </Box>
            </Grid>

            {/* Right Text Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: 'var(--secondary-green)', fontWeight: 800, letterSpacing: '0.1rem' }}
              >
                {t('quality.pillar3_subtitle')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '2.2rem',
                  mb: 3,
                  fontFamily: 'var(--heading-font)'
                }}
              >
                {t('quality.pillar3_title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}
              >
                {t('quality.pillar3_p1')}
              </Typography>

              {/* Multi-layered testing parameters */}
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {/* Lab evaluations card */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                        <ScienceIcon sx={{ color: 'var(--primary-green)' }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                          {t('quality.pillar3_c1_title')}
                        </Typography>
                      </Stack>
                      <List disablePadding>
                        {[
                          t('quality.pillar3_c1_l1'),
                          t('quality.pillar3_c1_l2'),
                          t('quality.pillar3_c1_l3'),
                          t('quality.pillar3_c1_l4')
                        ].map((item, i) => (
                          <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 28, color: 'var(--secondary-green)' }}>
                              <CheckCircleIcon sx={{ fontSize: '1.1rem' }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item}</Typography>} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Treatment card */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ height: '100%', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                        <BugReportIcon sx={{ color: 'var(--accent-gold)' }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                          {t('quality.pillar3_c2_title')}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 2, lineHeight: 1.6 }}>
                        {t('quality.pillar3_c2_desc')}
                      </Typography>
                      <List disablePadding>
                        {[
                          t('quality.pillar3_c2_l1'),
                          t('quality.pillar3_c2_l2')
                        ].map((item, i) => (
                          <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 28, color: 'var(--accent-gold)' }}>
                              <CheckCircleIcon sx={{ fontSize: '1.1rem' }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item}</Typography>} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                sx={{ color: 'var(--text-secondary)', lineHeight: 1.7, mb: 4 }}
              >
                {t('quality.pillar3_p2')}
              </Typography>

              {/* Result badge */}
              <Box
                sx={{
                  bgcolor: 'rgba(6, 78, 59, 0.05)',
                  borderLeft: '4px solid var(--primary-green)',
                  p: 2,
                  borderRadius: '0 12px 12px 0'
                }}
              >
                <Typography sx={{ color: 'var(--primary-green)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <strong>{t('quality.result_label')}</strong> {t('quality.pillar3_result')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. WHY CHOOSE B.L. SEEDS FARM */}
      <Box sx={{ py: 12, bgcolor: 'var(--text-primary)', color: 'white' }}>
        <Container maxWidth="xl">
          <SectionHeader title={t('quality.why_title')} highlight={t('quality.why_highlight')} darkText={false} />

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: t('quality.why_c1_t'),
                desc: t('quality.why_c1_d'),
                icon: <SettingsSuggestIcon />
              },
              {
                title: t('quality.why_c2_t'),
                desc: t('quality.why_c2_d'),
                icon: <ScienceIcon />
              },
              {
                title: t('quality.why_c3_t'),
                desc: t('quality.why_c3_d'),
                icon: <GroupsIcon />
              },
              {
                title: t('quality.why_c4_t'),
                desc: t('quality.why_c4_d'),
                icon: <TrendingUpIcon />
              },
              {
                title: t('quality.why_c5_t'),
                desc: t('quality.why_c5_d'),
                icon: <NaturePeopleIcon />
              }
            ].map((card, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    color: 'white',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      bgcolor: 'rgba(255, 255, 255, 0.06)',
                      borderColor: 'var(--secondary-green)',
                      boxShadow: '0 12px 30px rgba(5, 150, 105, 0.15)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3.5, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '16px',
                        bgcolor: 'rgba(5, 150, 105, 0.15)',
                        color: 'var(--secondary-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, fontSize: '1.05rem', color: 'white' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6, flexGrow: 1 }}>
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. BOTTOM CTA SECTION */}
      <Box
        sx={{
          py: 12,
          position: 'relative',
          background: 'linear-gradient(135deg, var(--primary-green) 0%, #022c22 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 3,
              fontFamily: 'var(--heading-font)'
            }}
          >
            {t('quality.cta_title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.2rem',
              mb: 6,
              maxWidth: '650px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            {t('quality.cta_desc')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: 'var(--accent-gold)',
                color: 'var(--text-primary)',
                fontWeight: 800,
                fontSize: '1.05rem',
                px: 5,
                py: 2,
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'white',
                  transform: 'translateY(-2px)'
                }
              }}
              component={RouterLink}
              to="/contact"
            >
              {t('quality.cta_btn_1')}
            </Button>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.4)',
                color: 'white',
                fontWeight: 800,
                fontSize: '1.05rem',
                px: 5,
                py: 2,
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  transform: 'translateY(-2px)'
                }
              }}
              component={RouterLink}
              to="/products"
            >
              {t('quality.cta_btn_2')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
