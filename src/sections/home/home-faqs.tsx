import type { FC } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

interface FaqType {
  question: string;
  answer: string;
}

const faqs: FaqType[] = [
  {
    question: 'How does your online teaching platform work?',
    answer:
      'Our platform offers a user-friendly interface where both educators and students can create accounts. Educators can upload their course materials, conduct live classes or post pre-recorded lessons. Students can enroll in courses, access materials, and participate in interactive sessions. We also provide tools for assessments and communication between educators and students.',
  },
  {
    question: 'What sets your edtech startup apart from other online learning platforms?',
    answer:
      "We differentiate ourselves through a combination of high-quality content, personalized learning experiences, and cutting-edge technology. Our platform uses AI to recommend courses tailored to individual learning styles and goals, and we offer a diverse range of courses taught by experienced educators. Additionally, we prioritize student engagement and provide real-time feedback to enhance the learning journey.",
  },
  {
    question: 'How do you ensure the quality of the courses on your platform?',
    answer:
      'We maintain quality by carefully curating our educators and courses. Each educator undergoes a rigorous vetting process to ensure they have the expertise and teaching skills necessary to deliver exceptional content. We also collect feedback from students and regularly review courses to make improvements. Our commitment to quality extends to the technology infrastructure to ensure a seamless learning experience.',
  },
  {
    question: 'What is the pricing model for your online courses?',
    answer:
      "Our pricing model is flexible and transparent. We offer a variety of pricing options, including one-time course purchases, subscription plans, and bundled course packages. Additionally, we provide free courses to give users a taste of our offerings. We believe in affordability and accessibility, so our pricing is designed to accommodate a wide range of budgets.",
  },
  {
    question: 'Do you offer any support for educators who want to create and sell their courses on your platform?',
    answer:
      'Absolutely! We provide comprehensive support to educators looking to create and monetize their courses. Our team offers guidance on course creation, marketing, and optimization to help them reach a wider audience. We also offer revenue-sharing opportunities, allowing educators to earn a substantial income while sharing their knowledge with our community.',
  },
];

interface FaqProps {
  answer: string;
  question: string;
}

const Faq: FC<FaqProps> = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">{question}</Typography>
        <SvgIcon>{isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}</SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export const HomeFaqs: FC = () => {
  return (
    <Box sx={{ py: '120px' }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              <Typography variant="h3">Everything you need to know</Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Frequently asked questions
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  {...faq}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
