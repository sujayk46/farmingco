
import About from '../../components/landing-page/About';
import Home from '../../components/landing-page/Home';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import NavBar from '../../components/shared/NavBar';
import  KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'; 


function SplashScreen() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <section>
        <Home />
        <About />
      </section>
      <Footer />
      <button
        onClick={scrollToTop} // Click handler to scroll to the top
        className="fixed bottom-4 right-4 bg-secondary opacity-75 drop-shadow-md text-white px-2 py-2 rounded-full shadow-lg hover:bg-primary transition duration-200 ease-in-out"
        aria-label="Scroll to top" // Accessibility label
      >
        <KeyboardDoubleArrowUpIcon />
      </button>
    </>
  );
}

export default SplashScreen;
