import { FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import companyContact from 'data/contact';
import { heroSlides } from 'data/home';
import styles from './home-hero-slider.module.css';

const HomeHeroBanner: FC = () => {
  return (
    <section className={`position-relative ${styles.heroSlider}`}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={900}
        loop
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ clickable: true }}
        navigation
        className="home-hero-swiper"
        style={{ height: 'min(520px, 75vh)', minHeight: '420px' }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="position-relative w-100 h-100">
              <div
                className={styles.slideBg}
                style={{ backgroundImage: `url(${encodeURI(slide.image)})` }}
              />
              <div className={styles.slideOverlay} />
              <div
                className={`position-relative d-flex align-items-center justify-content-center text-center h-100 ${styles.slideContent}`}
                style={{ padding: '60px 20px', zIndex: 2 }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(26, 32, 44, 0.82)',
                    padding: '28px 36px',
                    maxWidth: '760px',
                    borderRadius: '4px'
                  }}
                >
                  <h1
                    className="text-white mb-2"
                    style={{
                      fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
                      fontWeight: 700,
                      lineHeight: 1.35
                    }}
                  >
                    {slide.headline}
                  </h1>
                  <p className="text-white mb-0 opacity-90" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
                    {slide.subline}
                  </p>
                  <div className="mt-3 d-flex flex-wrap justify-content-center gap-1">
                    <Link href="/projects#running" className="btn btn-accent rounded-0">
                      View Projects
                    </Link>
                    <a
                      href={companyContact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light rounded-0"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeHeroBanner;
