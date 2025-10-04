import styles from './slider.module.css'
import Link from 'next/link';

const Slide5 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/pexels-sevenstormphotography-443383.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>ORACLE & MICROSOFT</h2>
            <h2>PARTNER SOLUTIONS</h2>
            <h3>FOR YOUR SUCCESS</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>Leverage our expertise as certified Oracle and Microsoft partners for optimal business outcomes.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="/partner">
              View Partners
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide5
