import type { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const HomeCta: FC = () => (
  <Box
    sx={{
      backgroundColor: 'neutral.800',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundImage: 'url("/assets/gradient-bg.svg")',
      color: 'neutral.100',
      py: '120px',
    }}
  >
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Typography
          align="center"
          color="inherit"
          variant="h3"
        >
          Motivation Behind It !!
        </Typography>
        <Typography
          align="center"
          color="inherit"
          variant="subtitle2"
        >
          Mrs. Anita Gupta is the dynamic owner of an esteemed New Era Academy. With a passion for learning and an unwavering commitment to education, Mrs. Anita has revolutionized the digital learning landscape with her innovative platform. As an experienced entrepreneur, she has leveraged her expertise and vision to create an inclusive and engaging virtual space, offering a wide range of courses and resources to empower learners of all ages and backgrounds. With her 29 years of wide experience in teaching, she has turned this Academy into a thriving community where individuals can nurture their skills, interact with experts, and forge meaningful connections. Through her tireless dedication and unwavering belief in the transformative power of education, Mrs. Anita Gupta has truly paved the way for the digital future of learning.
          
So, are you ready to embark on an exciting educational adventure? Join our vibrant online academy today and unlock your full potential. Together, let's embrace the future of learning.
        </Typography>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Button
          component="a"
          href="https://ykyh5mgzaf0.typeform.com/to/iI0tc8WZ"
          target="_blank"
          variant="contained"
        >
          Join Us
        </Button>
      </Stack>
    </Container>
  </Box>
);
