'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import FolderIcon from '@mui/icons-material/Folder';

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link href='/'>
            <TerminalIcon />
            &nbsp; JameyDev
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleMenu}
            >
              <MenuIcon fontSize='large' />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  router.push('/');
                }}
              >
                <HomeIcon />
                &nbsp; Home
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  router.push('/about');
                }}
              >
                <PersonIcon />
                &nbsp; About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  router.push('/contact');
                }}
              >
                <MailIcon />
                &nbsp; Contact
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  router.push('/projects');
                }}
              >
                <FolderIcon />
                &nbsp; Projects
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              color='inherit'
              component='a'
              onClick={() => router.push('/')}
            >
              <HomeIcon />
              &nbsp; Home
            </Button>
            <Button
              color='inherit'
              component='a'
              onClick={() => router.push('/about')}
            >
              <PersonIcon />
              &nbsp; About
            </Button>
            <Button
              color='inherit'
              component='a'
              onClick={() => router.push('/contact')}
            >
              <MailIcon />
              &nbsp; Contact
            </Button>
            <Button
              color='inherit'
              component='a'
              onClick={() => router.push('/projects')}
            >
              <FolderIcon />
              &nbsp; Projects
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
