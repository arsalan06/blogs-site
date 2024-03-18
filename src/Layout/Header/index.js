import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Box, Menu, MenuItem, Typography, useTheme } from '@mui/material';
import Logo from '../../assets/images/Logo.png';
import LogoWhite from '../../assets/images/Logo-White.png';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['Home', 'About us', 'Services', 'Blog', 'Contact'];
export default function Header({ flag }) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  return (
    <AppBar
      enableColorOnDark
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: flag ? '#1E1B1B' : theme.palette.background.default,
        px: flag ? 18 : 0
      }}
    >
      <Toolbar
        sx={{
          '&.MuiToolbar-root': {
            display: 'flex !important',
            justifyContent: { md: 'space-around', sm: 'space-between', xs: 'space-between' },
            alignItems: 'center'
          }
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => navigate('/')}>
          <img src={flag ? LogoWhite : Logo} alt="Logo" style={{ objectFit: 'cover' }} />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {pages.map((page) => (
            <Link key={page} style={{ textDecoration: 'none' }} to={'/'}>
              <Typography variant={flag ? 'linkWhite' : 'linkBlack'}>{page}</Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link key={page} style={{ textDecoration: 'none' }} to={'/'}>
                  <Typography variant="linkBlack">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {flag && <Typography variant="textCaption">@ Copyright Finsweet 2021</Typography>}
      </Toolbar>
    </AppBar>
  );
}
