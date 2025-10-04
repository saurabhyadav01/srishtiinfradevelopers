import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// Import CSS stylesheets and dependencies
import 'animate.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'plyr-react/plyr.css';
import 'glightbox/dist/css/glightbox.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Added Bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // Scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  // Manage loading status
  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>thissrishtiinfradevelopers.com</title>
        <meta name="description" content="Empowering businesses with cutting-edge cloud solutions for enhanced innovation, scalability, and efficiency. Explore our range of services for seamless cloud integration and optimization." />
        <meta name="keywords" content="cloud solutions, innovation, scalability, efficiency, cloud integration, optimization" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="thissrishtiinfradevelopers.com" />
        <link rel="canonical" href="https://thissrishtiinfradevelopers.com" />

        <meta property="og:description" content="Empowering businesses with cutting-edge cloud solutions for enhanced innovation, scalability, and efficiency." />
        <meta property="og:image" content="https://thissrishtiinfradevelopers.com/img/logo.jpg" />
        <meta property="og:url" content="https://thissrishtiinfradevelopers.com" />
      </Head>

      <ThemeProvider>
        {/* Page loader */}
        {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
