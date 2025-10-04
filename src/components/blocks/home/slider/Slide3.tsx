
import styles from './slider.module.css'
import Link from 'next/link';

// import img from "public/img/hero/03.jpg"
// console.log(img)
const Slide3 = () => {
  return (
    <div className="h-100" style={{ background:  'url("/img/pexels-vlada-karpovich-4050303.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={styles['slider-backdrop']}>
      </div>
      <div className={`container ${styles['slide-container']}`}>
        <div>
          <div className={styles['slide-heading']}>
            <h2>Over 20 years of creating infrastructure that lasts.</h2>
<h3>Experience you can rely on. Quality you can live on.</h3>
</div>
          <div className={styles['slide-paragraph']}>
            <p>Strengthening communities with trust and innovation for over two decades..
.</p>
          </div>
          <div className="clearfix"></div>
          <div data-swiper-parallax="500" className={styles['slide-btns']}>
            <Link href="#">
              Know more
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slide3