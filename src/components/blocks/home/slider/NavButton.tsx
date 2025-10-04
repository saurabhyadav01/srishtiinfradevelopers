import { useSwiper } from 'swiper/react';
import styles from './slider.module.css';

type TNavButton = {
    type: "next" | "prev"
}


const NavButton = ({ type }: TNavButton) => {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => type == "next" ? swiper.slideNext() : swiper.slidePrev()}
            type="button"
            className={`rounded-circle ${type == "next" ? "team__button-next " : "team__button-prev "} ${styles[type == "next" ? "next-btn" : "prev-btn"]}`}
        >
            <i className={`fa-regular ${type == "next" ? "fa-arrow-right-long" : "fa-arrow-left-long"}`}></i>
        </button>
    );
}

export default NavButton;