'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Rafale Knowledge Bridge
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom>
          Plateforme de transfert de connaissances
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600 }}>
          Dassault Aviation ↔ Tata Advanced Systems Limited
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push('/login')}
          >
            Connexion
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push('/about')}
          >
            En savoir plus
          </Button>
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 8 }}>
          © 2025 Dassault Aviation - Tous droits réservés
        </Typography>
      </Box>
    </Container>
  );
}
