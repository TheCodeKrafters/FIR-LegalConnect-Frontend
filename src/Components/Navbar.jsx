import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to right, #1e3a8a, #3b82f6, #1e3a8a)',
        py: 1,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Name */}
        <Typography
          variant="h6"
          component="a"
          href="/chatbot"
          sx={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'transform 0.3s',
            },
          }}
        >
          FIR-LegalConnect
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/helpline"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Helpline
          </Button>
          <Button
            component="a"
            to="/help"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Help
          </Button>
          <Button
            component={Link}
            to="/register"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            to="/login"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
