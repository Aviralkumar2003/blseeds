import { useState } from 'react';
import { Box, Container, Typography, Grid, Stack, Button, List, ListItem, ListItemText, MenuItem, Select, FormControl, InputLabel, Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GrassIcon from '@mui/icons-material/Grass';
import PageHero from '../components/common/PageHero';
import ProductCard from '../components/common/ProductCard';
import ProductDetailModal from '../components/common/ProductDetailModal';
import { useCropDescriptions } from '../hooks/useCropDescriptions';
import { CropDescription } from '../data/constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  const cropDescriptions = useCropDescriptions();
  const [selectedProduct, setSelectedProduct] = useState<CropDescription | null>(null);

  return (
    <>
      <Box>
      <PageHero
        title={t('products.page_hero_title')}
        breadcrumbs={[t('navbar.home'), t('products.page_hero_title')]}
        description={<>{t('products.page_hero_desc_1')} <br />{t('products.page_hero_desc_2')}</>}
        bgColor="#14532d"
        bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        darkTheme={true}
        rightContent={
          <Box
            sx={{
              width: 150, height: 150,
              borderRadius: '50%',
              border: '2px dashed rgba(255,255,255,0.5)',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              ml: 'auto'
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 800 }}>{t('products.premium_quality')}</Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, color: 'var(--accent-gold)' }}>100%</Typography>
            <Typography variant="caption" sx={{ fontWeight: 800 }}>{t('products.trusted')}</Typography>
          </Box>
        }
      />

      {/* CATALOG SECTION */}
      <Box sx={{ py: 10, bgcolor: '#fbfcfb' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {Object.values(cropDescriptions).map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <ProductCard
                  product={product}
                  variant="catalog"
                  onClick={() => setSelectedProduct(product)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FEATURES ROW */}
      <Box sx={{ py: 6, bgcolor: 'white', borderTop: '1px solid #f0f0f0' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {[
              { icon: <VerifiedUserIcon />, title: t('products.f_title_1'), desc: t('products.f_desc_1') },
              { icon: <HealthAndSafetyIcon />, title: t('products.f_title_2'), desc: t('products.f_desc_2') },
              { icon: <ScienceIcon />, title: t('products.f_title_3'), desc: t('products.f_desc_3') },
              { icon: <GrassIcon />, title: t('products.f_title_4'), desc: t('products.f_desc_4') },
              { icon: <LocalShippingIcon />, title: t('products.f_title_5'), desc: t('products.f_desc_5') },
              { icon: <ThumbUpIcon />, title: t('products.f_title_6'), desc: t('products.f_desc_6') },
            ].map((item, index) => (
              <Grid size={{ xs: 6, md: 2 }} key={index}>
                <Stack spacing={1.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 50, height: 50,
                      borderRadius: '50%',
                      bgcolor: '#f0f7f2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-green)',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', mt: 0.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* HELP CTA */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: '#1a472a',
              borderRadius: '20px',
              p: { xs: 4, md: 6 },
              color: 'white',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/leaf.png")',
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color:'white' }}>
                {t('products.help_cta_title')}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 500, color: 'white' }}>
                {t('products.help_cta_desc')}
              </Typography>
            </Box>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: '#1a472a',
                px: 4, py: 2,
                fontWeight: 800,
                '&:hover': { bgcolor: '#f0f0f0' }
              }}
              component={Link}
              to="/contact"
            >
              {t('products.help_cta_btn')}
            </Button>
          </Box>
        </Container>
      </Box>
      </Box>

      {/* PRODUCT DETAIL MODAL */}
      <ProductDetailModal
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct?.name ?? ''}
        productImg={selectedProduct?.img ?? ''}
        cropData={selectedProduct ?? undefined}
      />
    </>
  );
}
