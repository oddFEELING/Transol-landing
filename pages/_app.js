import '../styles/globals.css';
import ThemeContext from '../components/Theme/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  );
}

export default MyApp;
