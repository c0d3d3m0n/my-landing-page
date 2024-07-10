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

export default function Footer() {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Typography component='div' sx={{ flexGrow: 1 }}>
          <div className='text-center'>
            <Link href='/'>&copy; Jamey Bryce - Web Developer</Link>
          </div>
        </Typography>
        {/* <Button color='inherit'>
          <Link href='/'>Home</Link>
        </Button>
        <Button color='inherit'>
          <Link href='/about'>About</Link>
        </Button>
        <Button color='inherit'>
          <Link href='/contact'>Contact</Link>
        </Button>
        <Button color='inherit'>
          <Link href='/projects'>Projects</Link>
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}
