import { Box, Container, Typography, Grid, Stack, Button, TextField, Card, CardContent, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import { contactInfo, whyConnectReasons } from '../data/constants';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_TEMPLATE_ID } from '../data/config';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    emailjs.sendForm(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      formRef.current,
      VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert(t('contact.msg_success'));
        formRef.current?.reset();
        setIsSending(false);
      },
      (error) => {
        alert(t('contact.msg_error'));
        console.error(error);
        setIsSending(false);
      }
    );
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <PageHero
        title={t('contact.hero_title')}
        breadcrumbs={[t('navbar.home'), t('contact.breadcrumb')]}
        description={t('contact.hero_desc')}
        bgColor="#14532d"
        bgImage="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
        darkTheme={true}
      />

      {/* CONTENT AREA */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            {/* LEFT SIDEBAR */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>{t('contact.get_in_touch')}</Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', mb: 6 }}>
                {t('contact.get_in_touch_desc')}
              </Typography>

              <Stack spacing={5}>
                {contactInfo.map((item, index) => (
                  <Stack key={index} direction="row" spacing={3} sx={{ alignItems: 'flex-start' }}>
                    <Avatar sx={{ bgcolor: '#f0f7f2', color: 'var(--primary-green)', width: 50, height: 50 }}>
                      {item.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>{t(`contact.info_${index + 1}_t`)}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.content}</Typography>
                      {item.sub && <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', mt: 0.5 }}>{t(`contact.info_${index + 1}_sub`)}</Typography>}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* MAIN FORM */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', p: { xs: 2, md: 4 } }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 4 }}>{t('contact.form_title')}</Typography>

                  <Box component="form" ref={formRef} onSubmit={sendEmail}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="from_name" label={t('contact.label_name')} placeholder={t('contact.ph_name')} variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="from_email" label={t('contact.label_email')} placeholder={t('contact.ph_email')} variant="outlined" type="email" required />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="contact" label={t('contact.label_contact')} placeholder={t('contact.ph_contact')} variant="outlined" type="tel" required slotProps={{ htmlInput: { maxLength: 10 } }} />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12 }}>
                        <TextField fullWidth name="subject" label={t('contact.label_subject')} placeholder={t('contact.ph_subject')} variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField fullWidth name="message" multiline rows={5} label={t('contact.label_message')} placeholder={t('contact.ph_message')} variant="outlined" required />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<SendIcon />}
                          sx={{
                            bgcolor: '#0b3d11',
                            px: 6, py: 2,
                            fontWeight: 900,
                            borderRadius: '8px',
                            mt: 2
                          }}
                          disabled={isSending}
                        >
                          {isSending ? t('contact.btn_submitting') : t('contact.btn_submit')}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MAP SECTION */}
      <Box sx={{ height: '450px', width: '100%', bgcolor: '#eee', position: 'relative' }}>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.850176464714!2d78.9078832!3d26.8765008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975db7ccef2c913%3A0x9d122be600459451!2sB.L%20Seeds%20Farm!5e0!3m2!1sen!2sin!4v1716200000000!5m2!1sen!2sin"
          sx={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* WHY CONNECT WITH US */}
      <Box sx={{ py: 10, bgcolor: '#fbfcfb', borderTop: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <SectionHeader title={t('contact.why_connect_t1')} highlight={t('contact.why_connect_t2')} />

          <Grid container spacing={4}>
            {whyConnectReasons.map((benefit, index) => (
              <Grid size={{ xs: 6, md: 2.4 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#f0f7f2', color: 'var(--primary-green)', mx: 'auto', mb: 2, width: 60, height: 60 }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2 }}>{t(`contact.wc_${index + 1}_t`)}</Typography>
                  <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', px: 1 }}>{t(`contact.wc_${index + 1}_d`)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
