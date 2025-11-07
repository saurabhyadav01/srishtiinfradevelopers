import styles from './slider.module.css'
import Link from 'next/link';

const Slide5 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/WhatsApp Image 2025-11-05 at 17.52.45 (1).jpeg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Construction management focused on quality and timely delivery.</h2>
            <h3 style={{ fontWeight: 400 }}>Vendor coordination, compliance, and cost control in every phase.</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p>Delivering premium residential and commercial assets ready for possession.</p>
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
