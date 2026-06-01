import { Box, Typography, Modal, IconButton, Chip, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { CropDescription, CropDetailValue } from '../../data/constants';
import { useTranslation } from 'react-i18next';

interface ProductDetailModalProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  productImg: string;
  cropData: CropDescription | undefined;
}

function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function renderValue(value: CropDetailValue, t: any) {
  if (Array.isArray(value)) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {value.map((item, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <TaskAltIcon sx={{ fontSize: '0.95rem', color: '#2e7d32', mt: '3px', flexShrink: 0 }} />
            <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6 }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const obj = value as { kharif?: string; summer?: string };
    return (
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {obj.kharif && (
          <Chip label={`${t('Kharif')}: ${t(obj.kharif)}`} size="small"
            sx={{ bgcolor: '#e8f5e9', color: '#1b5e20', fontWeight: 600, fontSize: '0.75rem' }} />
        )}
        {obj.summer && (
          <Chip label={`${t('Summer')}: ${t(obj.summer)}`} size="small"
            sx={{ bgcolor: '#fff8e1', color: '#e65100', fontWeight: 600, fontSize: '0.75rem' }} />
        )}
      </Box>
    );
  }
  return (
    <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6 }}>
      {value}
    </Typography>
  );
}

export default function ProductDetailModal({
  open,
  onClose,
  productName,
  productImg,
  cropData,
}: ProductDetailModalProps) {
  const { t } = useTranslation();

  if (!cropData) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 1, sm: 2 } }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: '20px',
          maxWidth: 960,
          width: '100%',
          maxHeight: '92vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          outline: 'none',
        }}
      >
        {/* ── LEFT: IMAGE PANEL ── */}
        <Box
          sx={{
            width: { xs: '100%', md: '42%' },
            flexShrink: 0,
            bgcolor: '#f0f7f0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: { xs: 220, md: 'auto' },
            p: { xs: 2, md: 3 },
          }}
        >
          {/* Category badge */}
          <Box sx={{ position: 'absolute', top: 14, left: 14 }}>
            <Chip
              icon={<LocalOfferIcon sx={{ fontSize: '0.8rem !important', color: '#1b5e20 !important' }} />}
              label={cropData.category}
              size="small"
              sx={{
                bgcolor: 'white',
                color: '#1b5e20',
                fontWeight: 700,
                fontSize: '0.7rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #c8e6c9',
              }}
            />
          </Box>

          {/* Full product image */}
          <Box
            component="img"
            src={productImg}
            alt={productName}
            sx={{
              maxWidth: '100%',
              maxHeight: { xs: 200, md: 340 },
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </Box>

        {/* ── RIGHT: CONTENT PANEL ── */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Sticky header */}
          <Box
            sx={{
              px: { xs: 2.5, md: 3.5 },
              pt: { xs: 2.5, md: 3 },
              pb: 2,
              borderBottom: '1px solid #eef3ee',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 1,
              flexShrink: 0,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: '#1a2e1a', lineHeight: 1.3, mb: 0.75, fontSize: { xs: '1.1rem', md: '1.3rem' } }}
              >
                {cropData.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#666', lineHeight: 1.7, fontStyle: 'italic' }}
              >
                {cropData.shortDescription}
              </Typography>
            </Box>
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                flexShrink: 0,
                bgcolor: '#f5f5f5',
                '&:hover': { bgcolor: '#e0e0e0' },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Scrollable details */}
          <Box sx={{ overflowY: 'auto', flex: 1, px: { xs: 2.5, md: 3.5 }, py: 2.5 }}>
            <Typography
              variant="overline"
              sx={{ fontWeight: 800, color: '#2e7d32', letterSpacing: '0.08em', display: 'block', mb: 1.5 }}
            >
              📋 Product Details
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {Object.entries(cropData.details).map(([key, value]) => (
                <Box
                  key={key}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    py: 1.25,
                    px: 1.75,
                    borderRadius: '10px',
                    bgcolor: '#f9fbf9',
                    border: '1px solid #eef3ee',
                    '&:hover': { bgcolor: '#f0f7f0', borderColor: '#c8e6c9' },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      color: '#2e7d32',
                      minWidth: { sm: 145 },
                      flexShrink: 0,
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      mt: { sm: '2px' },
                    }}
                  >
                    {t(formatKey(key))}
                  </Typography>
                  <Box sx={{ flex: 1 }}>{renderValue(value, t)}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
