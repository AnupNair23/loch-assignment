import * as React from "react";
import NotificationItem from "./NotificationItem";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import NotifyItem from "./NotifyItem";
import Reminder from "./Reminder";

const AutoplayCarousel: React.FC = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1// optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            customTransition="ease-in-out 2s"
            transitionDuration={1000}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
            <NotificationItem key={'carousel-1'} text={''} />
            <NotifyItem />
            <Reminder />
        </Carousel>
    )
}

export default AutoplayCarousel;
