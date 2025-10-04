import styles from './slider.module.css'
import Link from 'next/link';

const Slide4 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/pexels-pixabay-273665.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>ENTERPRISE CLOUD SOLUTIONS</h2>
            <h2>FOR MODERN BUSINESS</h2>
            <h3>TRANSFORMATION</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>Accelerate your digital transformation with our comprehensive cloud and ERP solutions.</p>
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
