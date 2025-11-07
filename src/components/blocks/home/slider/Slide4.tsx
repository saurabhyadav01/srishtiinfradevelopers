import styles from './slider.module.css'
import Link from 'next/link';

const Slide4 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/WhatsApp Image 2025-11-05 at 17.52.45.jpeg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Project marketing that accelerates bookings and collections.</h2>
            <h3 style={{ fontWeight: 400 }}>Data-led campaigns, site experiences, and channel partner outreach.</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>We set up sales offices, manage brokers, and keep customer pipelines active.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="/services">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4
