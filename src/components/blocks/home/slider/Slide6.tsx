import styles from './slider.module.css'
import Link from 'next/link';

const Slide6 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/WhatsApp Image 2025-11-05 at 17.52.45 (2).jpeg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Customer service and resale assistance for completed projects.</h2>
            <h3 style={{ fontWeight: 400 }}>Post-handover support, rental management, and reinvestment options.</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>We nurture long-term relationships that expand your real estate portfolio.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="/contact">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide6
