import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainContainer({ children }) {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Header />
      <main className='flex-grow mt-10'>{children}</main>
      <Footer />
    </div>
  );
}
