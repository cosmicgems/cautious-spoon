import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { blackBeauty } from '@/src/utils/typography/color';
import { NavLink,} from 'react-router-dom';
import { useRouter } from 'next/router';

const pages = [   'contact', 'about','skills','portfolio'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(router.pathname)
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{bgcolor: blackBeauty[900], fontFamily: 'mongoose' }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'mongoose',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              fontSize:'3rem'
            }}
            className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'
          >
            Maliek Davis
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',  },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                <Link href='/' ><Typography textAlign="center" sx={{fontSize:'1.35rem', letterSpacing: '2px'}} className={router.pathname === ( '/' ) ? 'animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black fw-bold' : 'white-text'}  >HOME</Typography></Link>
                  
                </MenuItem>
              {pages.slice(0).reverse().map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link href={`${page}`} ><Typography textAlign="center" sx={{fontSize:'1.35rem', letterSpacing: '2px'}} className={router.pathname === ( '/' + page.toLowerCase()) ? 'animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' : 'white-text'}  >{page.toUpperCase()}</Typography></Link>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'mongoose',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
            className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'
          >
            Maliek Davis
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection:'row-reverse' }}>
          
            {pages.map((page) => (
              <Link key={page} href={`${page}`}><Button
                 
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.5rem' }}
              >
              <Typography sx={{fontSize:'2rem'}} className={router.pathname === ( '/' + page.toLowerCase()) ? 'animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' : ''}   >
                {page}
              </Typography>
                
              </Button></Link>
              
            ))}<Link  href='/'><Button
                  
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , fontSize: '2rem'}}
              >
              <Typography sx={{fontSize:'2rem'}} className={router.pathname === ( '/' ) ? 'animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' : ''} >
                Home
              </Typography>
                
              </Button></Link>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>

    
  );
}
export default ResponsiveAppBar;