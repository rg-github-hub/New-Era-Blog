import type { FC } from 'react';
import { useTheme } from '@mui/material/styles';

export const Logo: FC = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  // const logoSrc = require('/neweralogo.jpeg');

  return (
    <img
      alt="Amplify"
      src="/assets/logos/newerasvg.svg"
      style={{
        maxWidth: '53.62px',
        width: '100%',
      }}
    />
    // <img
    //   src= {logoSrc.default} // Provide the path to your image
    //   alt="Logo" // Add an alt text for accessibility
    //   width="100%" // Set the width to your desired size
    //   height="auto" // Let the height adjust automatically to maintain aspect ratio
    // />
  );
};
