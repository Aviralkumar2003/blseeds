import { Box, Container, Typography, Grid, Stack, Button, TextField, Card, CardContent } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { dealerBenefits, CONTACT_DETAILS } from '../data/constants';
import { VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_DEALER_ENQUIRY_TEMPLATE_ID } from '../data/config';
import DealerEnquiry1 from '../assets/Farm/DealerEnquiry1.png';
import DealerEnquiry2 from '../assets/Farm/DealerEnquiry2.png';

export default function DealerEnquiry() {

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);



  const sendEnquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Inject selected products as a hidden field value before sending
    const productsInput = formRef.current.querySelector<HTMLInputElement>('input[name="products_of_interest"]');
    if (productsInput) productsInput.value = selectedProducts.join(', ') || 'None selected';

    setIsSending(true);
    emailjs.sendForm(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_DEALER_ENQUIRY_TEMPLATE_ID,
      formRef.current,
      VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert('Dealer enquiry submitted successfully! Our team will contact you shortly.');
        formRef.current?.reset();
        setSelectedProducts([]);
        setIsSending(false);
      },
      (error) => {
        alert('Failed to submit enquiry. Please try again.');
        console.error(error);
        setIsSending(false);
      }
    );
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: { xs: '300px', md: '450px' },
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: '700px' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 800, mb: 2, color: 'white' }}>
              Become Our Partner. <br />
              <span style={{ color: 'var(--accent-gold)' }}>Grow Together.</span>
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, opacity: 0.9, lineHeight: 1.6, color: 'white' }}>
              Join our dealer network and grow your business with <br />
              high quality seeds and trusted support.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* BREADCRUMB */}
      <Box sx={{ py: 3, bgcolor: '#f8f9fa', borderBottom: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Home</Typography>
            <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>&gt;</Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, color: 'var(--primary-green)' }}>Dealer Enquiry</Typography>
          </Stack>
        </Container>
      </Box>

      {/* WHY PARTNER WITH US */}
      {/* <Box sx={{ py: 10, bgcolor: '#fbfcfb', borderTop: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Why Partner with BL Seeds Farm?</Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: 'var(--accent-gold)', mx: 'auto', borderRadius: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {[
              { icon: <VerifiedIcon />, title: "Quality Assured", desc: "Lab tested, high germination seeds you can trust." },
              { icon: <GrassIcon />, title: "Wide Product Range", desc: "Complete range of crops and vegetable seeds." },
              { icon: <CampaignIcon />, title: "Marketing Support", desc: "We provide marketing materials and support." },
              { icon: <LocalShippingIcon />, title: "Fast Delivery", desc: "Timely delivery and strong supply network." },
              { icon: <AssignmentIcon />, title: "Attractive Schemes", desc: "Exciting offers and schemes for our dealers." },
              { icon: <TrendingUpIcon />, title: "Long Term Growth", desc: "Grow your business with a trusted brand." },
            ].map((benefit, index) => (
              <Grid size={{ xs: 6, md: 2 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#f0f7f2', color: 'var(--primary-green)', mx: 'auto', mb: 2, width: 60, height: 60 }}>
                    {benefit.icon}
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2 }}>{benefit.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'var(--text-secondary)', display: 'block', px: 1 }}>{benefit.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* CONTRACT FARMING PROGRAM SECTION */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Contract Farming Program</Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: 'var(--primary-green)', mx: 'auto', borderRadius: 2, mb: 4 }} />
            <Typography variant="h6" sx={{ color: 'var(--text-secondary)', maxWidth: '900px', mx: 'auto', lineHeight: 1.8 }}>
              At B.L. Seeds Farm, contract farming is more than a system—it is a trusted partnership built on experience, transparency, and a shared commitment to quality seed production. With decades of agricultural expertise, we work closely with farmers to produce premium vegetable seeds that meet the highest standards of purity and performance.
            </Typography>
          </Box>

          {/* Philosophy & Image */}
          <Grid container spacing={8} sx={{ mb: 12, alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{
                height: { xs: '300px', md: '500px' },
                borderRadius: '24px',
                backgroundImage: `url(${DealerEnquiry1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
              }} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Our Philosophy</Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: 'var(--primary-green)', borderRadius: 2, mb: 4 }} />
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, mb: 3, fontSize: '1.1rem' }}>
                We believe that successful seed production begins with strong farmer relationships and scientific farming practices. Our contract farming model is designed to empower farmers with the right knowledge, reliable support, and assured returns.
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                From field selection to final seed processing, every step is carefully supervised to maintain consistency, quality, and long-term sustainability.
              </Typography>
            </Grid>
          </Grid>

          {/* How We Work */}
          <Box sx={{ mb: 12 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, textAlign: 'center' }}>How We Work</Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: 'var(--primary-green)', mx: 'auto', borderRadius: 2, mb: 6 }} />
            <Grid container spacing={4}>
              {[
                { title: "1. Farmer & Field Selection", desc: "We carefully select progressive farmers and suitable regions with optimal soil and climate conditions to ensure the best seed output." },
                { title: "2. Complete Technical Guidance", desc: "Our experienced agronomists provide end-to-end support throughout the crop cycle—covering sowing practices, isolation distance, crop nutrition, and pest & disease management." },
                { title: "3. Continuous Field Monitoring", desc: "Regular field visits and inspections are conducted to ensure genetic purity, crop health, and strict adherence to our quality standards." },
                { title: "4. Scientific Harvesting & Processing", desc: "Seeds are harvested at precise maturity stages and processed using modern seed cleaning, grading, and treatment technologies at our facilities." }
              ].map((step, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Card sx={{ height: '100%', borderRadius: '20px', border: '1px solid #f0f0f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' } }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'var(--primary-green)', mb: 2, minHeight: { md: '60px' } }}>{step.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Why Choose & Quality - Alternating Image */}
          <Grid container spacing={8} sx={{ mb: 4, alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Why Farmers Choose B.L. Seeds Farm</Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: 'var(--primary-green)', borderRadius: 2, mb: 5 }} />
              <Stack spacing={4}>
                {[
                  { title: "Assured Buy-Back", desc: "Guaranteed procurement of seed produce" },
                  { title: "Expert-Led Support", desc: "Guidance from skilled agronomists at every stage" },
                  { title: "Premium Inputs", desc: "Access to high-quality parent lines and advanced techniques" },
                  { title: "Higher Returns", desc: "Better profitability than traditional crop cultivation" },
                  { title: "Reliable Partnership", desc: "Long-term, transparent, and farmer-focused collaboration" }
                ].map((item, idx) => (
                  <Stack key={idx} direction="row" spacing={3} sx={{ alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1, bgcolor: '#f0f7f2', borderRadius: '50%', mt: 0.5 }}>
                      <VerifiedIcon sx={{ color: 'var(--primary-green)', fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5, fontSize: '1.1rem' }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{item.desc}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{
                height: { xs: '300px', md: '600px' },
                borderRadius: '24px',
                backgroundImage: `url(${DealerEnquiry2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
              }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* QUALITY COMMITMENT */}
      <Box sx={{ py: 12, bgcolor: 'var(--primary-green)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Background Overlay Pattern */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'var(--accent-gold)' }}>Our Quality Commitment</Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: 'var(--accent-gold)', mx: 'auto', borderRadius: 2, mb: 4 }} />
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, lineHeight: 1.8, mb: 8, maxWidth: '800px', mx: 'auto', color: 'var(--accent-gold)' }}>
            At B.L. Seeds Farm, quality is not just a process—it is our identity. Every seed lot undergoes strict monitoring and multi-level quality checks to ensure:
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {[
              "High genetic purity",
              "Superior germination performance",
              "Strong seed health and vigor"
            ].map((check, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 4, borderRadius: '20px', height: '100%', backdropFilter: 'blur(10px)', transition: 'all 0.3s', '&:hover': { bgcolor: 'rgba(255,255,255,0.15)', transform: 'translateY(-5px)' } }}>
                  <VerifiedIcon sx={{ fontSize: '3.5rem', mb: 3, color: 'var(--accent-gold)' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{check}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, fontSize: '1.1rem', maxWidth: '800px', mx: 'auto', color: 'var(--accent-gold)' }}>
            Our advanced seed processing systems and scientific post-harvest practices ensure that the final product consistently meets and exceeds industry standards.
          </Typography>
        </Container>
      </Box>

      {/* CONTENT AREA */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            {/* LEFT SIDEBAR */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Dealer Enquiry</Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: 'var(--primary-green)', borderRadius: 2, mb: 4 }} />
              <Typography variant="body1" sx={{ color: 'var(--text-secondary)', mb: 6 }}>
                Fill out the form and our team will get in touch with you shortly.
              </Typography>

              <Stack spacing={4} sx={{ mb: 8 }}>
                {dealerBenefits.map((item, index) => (
                  <Stack key={index} direction="row" spacing={3} sx={{ alignItems: 'flex-start' }}>
                    <Box sx={{ color: 'var(--primary-green)', mt: 0.5 }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 0.5 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              {/* Need Help Widget */}
              <Box sx={{ bgcolor: '#f0f7f2', borderRadius: '15px', p: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Need Help?</Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-secondary)', mb: 4 }}>Our team is here to help you.</Typography>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{CONTACT_DETAILS.phone}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <EmailIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{CONTACT_DETAILS.email}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ color: 'var(--primary-green)', fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{CONTACT_DETAILS.businessHours}</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            {/* MAIN FORM */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', p: { xs: 2, md: 4 } }}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Dealer Enquiry Form</Typography>
                  <Box sx={{ width: 60, height: 4, bgcolor: 'var(--primary-green)', borderRadius: 2, mb: 4 }} />

                  <Box component="form" ref={formRef} onSubmit={sendEnquiry}>
                    {/* Hidden field for checkbox products — value injected before send */}
                    <input type="hidden" name="products_of_interest" />

                    <Grid container spacing={3}>
                      {/* Personal Details */}
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="dealer_name" label="Full Name" placeholder="Enter your full name" variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="contact" label="Your Contact No." placeholder="Enter your 10 digit Contact No." variant="outlined" type="tel" required slotProps={{ htmlInput: { maxLength: 10 } }} />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="dealer_email" label="Email Address" placeholder="Enter your email address" variant="outlined" type="email" required/>
                      </Grid>

                      {/* Location */}
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="state" label="State" placeholder="Enter your state" variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="district" label="District" placeholder="Enter your district" variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="city" label="City / Town" placeholder="Enter your city or town" variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth name="pincode" label="Pincode" placeholder="Enter pincode" variant="outlined" required />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField fullWidth name="address" multiline rows={2} label="Complete Address" placeholder="Enter your complete address" variant="outlined" required />
                      </Grid>

                      {/* Business Info */}

                      {/* How did you hear */}
                      {/* <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel>How did you hear about us?</InputLabel>
                          <Select label="How did you hear about us?" name="referral_source" defaultValue="">
                            <MenuItem value="Social Media">Social Media</MenuItem>
                            <MenuItem value="Friend / Reference">Friend / Reference</MenuItem>
                            <MenuItem value="Search Engine">Search Engine</MenuItem>
                            <MenuItem value="Field Agent">Field Agent / Company Rep</MenuItem>
                            <MenuItem value="Advertisement">Advertisement</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid> */}

                      <Grid size={{ xs: 12, sm: 12 }}>
                        <TextField fullWidth name="requirements" multiline rows={3} label="Requirements" placeholder="Enter your requirements..." variant="outlined" required />
                      </Grid>
                      {/* Additional message */}
                      <Grid size={{ xs: 12, sm: 12 }}>
                        <TextField fullWidth name="subject" label="Mail Subject" placeholder="Enter Subject" variant="outlined" required/>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 12 }}>
                        <TextField fullWidth name="message" multiline rows={3} label="Mail Body" placeholder="Enter Mail Body" variant="outlined" required/>
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<SendIcon />}
                          sx={{
                            bgcolor: 'var(--primary-green)',
                            px: 6, py: 2,
                            fontWeight: 900,
                            borderRadius: '8px',
                            mt: 2
                          }}
                          disabled={isSending}
                        >
                          {isSending ? 'Submitting...' : 'SUBMIT ENQUIRY'}
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

    </Box>
  );
}
