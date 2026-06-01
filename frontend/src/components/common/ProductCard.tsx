import { Box, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CropDescription } from '../../data/constants';
import { useTranslation } from 'react-i18next';

interface ProductCardProps {
  product: CropDescription;
  variant?: 'home' | 'catalog';
  onClick?: () => void;
}

export default function ProductCard({ product, variant = 'catalog', onClick }: ProductCardProps) {
  const { t } = useTranslation();

  if (variant === 'home') {
    return (
      <Card
        onClick={onClick}
        sx={{
          borderRadius: '15px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: onClick ? 'pointer' : 'default',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ height: 200, bgcolor: '#f4f8f4', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', p: 1 }}>
          <Box
            component="img"
            src={product.img}
            alt={product.name}
            sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </Box>
        <CardContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
            {product.name}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={onClick}
            sx={{
              borderRadius: '4px',
              borderColor: '#e5e7eb',
              color: 'var(--primary-green)',
              fontWeight: 700,
              fontSize: '0.75rem',
              '&:hover': { borderColor: 'var(--primary-green)', bgcolor: '#f0f7f2' },
            }}
          >
            VIEW PRODUCTS
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ── Catalog variant ──────────────────────────────────────────────
  return (
    <Card
      onClick={onClick}
      sx={{
        borderRadius: '16px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        border: '1px solid transparent',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
          borderColor: '#a5d6a7',
        },
      }}
    >
      {/* Image */}
      <Box sx={{ bgcolor: '#f4f8f4', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', p: 2, minHeight: 200, position: 'relative' }}>
        <Box
          component="img"
          src={product.img}
          alt={product.name}
          sx={{
            maxWidth: '100%',
            maxHeight: 220,
            objectFit: 'contain',
          }}
        />
        {/* Hover overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(20,83,45,0.45) 0%, transparent 60%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            pb: 2,
            '.MuiCard-root:hover &': { opacity: 1 },
          }}
        >
          <Chip
            label="Click to view details"
            size="small"
            sx={{
              bgcolor: 'white',
              color: '#1b5e20',
              fontWeight: 700,
              fontSize: '0.72rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1rem', color: '#1a2e1a' }}>
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'var(--text-secondary)', lineHeight: 1.65, flexGrow: 1, mb: 2.5 }}
        >
          {product.shortDescription}
        </Typography>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon sx={{ fontSize: '0.95rem !important' }} />}
          onClick={(e) => { e.stopPropagation(); onClick?.(); }}
          sx={{
            alignSelf: 'flex-start',
            borderRadius: '8px',
            borderColor: '#2e7d32',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.78rem',
            py: 0.75,
            px: 2,
            '&:hover': { bgcolor: '#f0f7f0', borderColor: '#1b5e20', color: '#2e7d32' },
          }}
        >
          VIEW DETAILS
        </Button>
      </CardContent>
    </Card>
  );
}
