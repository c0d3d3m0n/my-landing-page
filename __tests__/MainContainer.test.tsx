import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MainContainer from '@/components/MainContainer'; // Adjust the import path as necessary
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock Header and Footer components
jest.mock('@/components/Header', () => () => <header>Mock Header</header>);
jest.mock('@/components/Footer', () => () => <footer>Mock Footer</footer>);

describe('MainContainer', () => {
  test('renders without crashing', () => {
    render(<MainContainer>Some test content</MainContainer>);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('contains Header, main content, and Footer', () => {
    render(<MainContainer>Test Children</MainContainer>);
    expect(screen.getByText('Mock Header')).toBeInTheDocument();
    expect(screen.getByText('Test Children')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  test('renders children inside the main element', () => {
    const testMessage = 'Test Children';
    render(<MainContainer>{testMessage}</MainContainer>);
    expect(screen.getByRole('main')).toHaveTextContent(testMessage);
  });

  test('has the correct class names for styling', () => {
    render(<MainContainer>Test content</MainContainer>);
    const mainContainerDiv = screen.getByRole('main').parentNode;
    expect(mainContainerDiv).toHaveClass('flex flex-col justify-center items-center min-h-screen main-container');
  });
});