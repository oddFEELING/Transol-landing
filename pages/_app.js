import '../styles/globals.css';
import ThemeContext from '../components/Theme/ThemeContext';
import App_Layout from '../layouts/app_layout/app_layout';
import NavContext from '../context/nav_context/NavContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext>
      <NavContext>
        <App_Layout>
          <Component {...pageProps} />
        </App_Layout>
      </NavContext>
    </ThemeContext>
  );
}

export default MyApp;

// app id for mailing
// e772f6a8-7a9a-4c8a-a381-05f6314e9e9b
