
import styles from './slider.module.css'
import Link from 'next/link';

// console.log(img)
const Slide2 = () => {
  return (
    <div className="h-100" style={{ background: `url('/img/pexels-pixabay-164572.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Two decades of delivering strength, reliability, and innovation.</h2>
            <h2>Your trusted partner in building the future since 2000+</h2>
            <h3>20 years of proven expertise, countless strong foundations</h3>
          </div>
          <div className={styles['slide-paragraph']}>
            <p> Engineering trust. Delivering excellence.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="/">
              Learn more
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slide2