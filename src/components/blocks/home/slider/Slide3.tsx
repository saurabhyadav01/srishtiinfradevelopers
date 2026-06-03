
import styles from './slider.module.css'
import Link from 'next/link';

// import img from "public/img/hero/03.jpg"
// console.log(img)
const Slide3 = () => {
  return (
    <div className="h-100" style={{ background:  'url("/img/WhatsApp Image 2025-11-05 at 17.52.44 (2).jpeg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Strategic land acquisition and joint development partnerships.</h2>
            <h3 style={{ fontWeight: 400 }}>We identify high-growth locations and unlock value for landowners.</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>Structured deals, clear titles, and sustainable revenue models for every project.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="/about">
              Know More
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slide3