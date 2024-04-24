import { Typography, Box, Button } from '@mui/material';

const QuizCompleted = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 0 80px 0',
        justifyContent: 'space-between',
        minHeight: '100dvh',
        height: '100%',
        h3: {
          fontSize: '72px',
          '@media screen and (max-width:579px)': {
            fontSize: '32px',
          },
        },
        '@media screen and (max-width:800px)': {
          padding: '32px 24px 40px 24px',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box>
        <Typography
          variant='body1'
          align='center'
          sx={{
            fontSize: '32px',
            maxWidth: '25ch',
            '@media screen and (max-width:579px)': {
              fontSize: '16px',
            },
          }}
        >
          Gratulálok! Ügyesen megfejtettétek a kódokat, de a verseny java még
          csak most következik! Menjetek a *Shifen Old Street*-re (plus chinese
          letters) és keressétek az Ázsia Expressz zászlót a hídon!
        </Typography>
      </Box>
      <Button
        variant='contained'
        onClick={() => window.location.reload()}
        sx={{
          width: '300px',
          border: '2px solid #ffffff',
          color: '#ffffff',
          boxShadow: 'none',
          background: 'transparent',
          borderRadius: '45px',
          '@media screen and (max-width:579px)': {
            width: '100%',
          },
        }}
      >
        Retry
      </Button>
    </Box>
  );
};

export default QuizCompleted;
