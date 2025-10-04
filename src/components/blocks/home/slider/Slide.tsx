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
        <div className="h-100" style={{ background:  'url("/img/pexels-kindelmedia-7651627.jpg")', backgroundRepeat: "no-repeat",backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className={styles['slider-backdrop']}>
            </div>
            <div className={`container ${styles['slide-container']}`}>
                <div>
                    <div className={styles['slide-heading']}>
                  <h2>Building trust, brick by brick, for over two decades. </h2>
                  <h2>20+ years of shaping skylines and strengthening foundations.</h2>
                  <h2>Where experience meets excellence in infrastructure</h2>

               
                    </div>
                    <div className={styles['slide-paragraph']}>
                        <p>{paragraph}</p>
                    </div>
                    <div className="clearfix"></div>
                    <div data-swiper-parallax="500" className={styles['slide-btns']}>
  {cta.map((ct) => {
    if (ct.type === "button") {
      return (
        <button key={ct.label}>{ct.label}</button>
      );
    }

    return (
      <Link href={ct.action} key={ct.label}>
        {ct.label}
      </Link>
    );
  })}
</div>

                </div>
            </div>
        </div>
    )
}

export default Slide