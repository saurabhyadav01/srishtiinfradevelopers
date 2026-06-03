import { WrapperInterface } from 'types/index';
import styles from './slider.module.css'
import Link from 'next/link';
// import img from "public/img/hero/02.jpg"
// console.log(img)

interface ISlide extends WrapperInterface {
    data: {
        bgImage: String,
        heading: String,
        paragraph?: String,
        cta: { label: string; action: string; type: string | (() => void); }[]
    }
}

const Slide = ({ data }: ISlide) => {

    const { bgImage, heading, paragraph, cta } = data;

    return (
        <div className="h-100" style={{ background:  'url("/img/WhatsApp Image 2025-11-05 at 17.52.44.jpeg")', backgroundRepeat: "no-repeat",backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className={styles['slider-backdrop']}>
            </div>
            <div className={`container ${styles['slide-container']}`}>
                <div>
                    <div className={styles['slide-heading']}>
                  <h2>Comprehensive real estate development across Noida and the NCR.</h2>
                  <h3 style={{ fontWeight: 400 }}>From land procurement to project sales and customer handover.</h3>
                    </div>
                    <div className={styles['slide-paragraph']}>
                        <p>Two decades of expertise in planning, approvals, construction, and transaction support.</p>
                    </div>
                    <div className="clearfix"></div>
                    <div data-swiper-parallax="500" className={styles['slide-btns']}>
                      <Link href="/projects">Explore Projects</Link>
                      <Link href="/about/contact">Book Site Visit</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slide