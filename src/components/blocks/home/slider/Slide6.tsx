import styles from './slider.module.css'
import Link from 'next/link';

const Slide6 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/hero/07.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>MANAGED SERVICES</h2>
            <h2>FOR CLOUD INFRASTRUCTURE</h2>
            <h3>AND APPLICATIONS</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>Focus on your core business while we manage your cloud infrastructure and applications.</p>
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
