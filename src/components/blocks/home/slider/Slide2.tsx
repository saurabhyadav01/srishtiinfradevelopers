
import styles from './slider.module.css'
import Link from 'next/link';

// console.log(img)
const Slide2 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/WhatsApp Image 2025-11-05 at 17.52.44 (1).jpeg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Dedicated sales advisory for plots, villas, and commercial assets.</h2>
            <h3 style={{ fontWeight: 400 }}>Transparent pricing, documentation, and customer onboarding.</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>Our real estate team guides buyers and investors at every milestone.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="/projects">
              View Projects
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slide2