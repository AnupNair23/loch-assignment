import * as React from "react";
import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        // paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const TestimonialCarousel: React.FC = () => {
    return (
        <Carousel
            // ssr
            partialVisbile
            deviceType={'desktop'}
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={3000}
            keyBoardControl={false}
            customTransition="ease-in-out 2s"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            draggable={true}
        >
            <TestimonialCard name={'Jack F'}
                designation={"Ex Blackrock PM"}
                testimonial={`“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`}
                active={false} />

            <TestimonialCard name={'Yash P'}
                designation={"Research, 3poch Crypto Hedge Fund"}
                testimonial={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
                active={true} />

            <TestimonialCard name={'Shiv S'}
                designation={"Co-Founder Magik Labs"}
                testimonial={`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}
                active={false} />
        </Carousel>
    );
};

export default TestimonialCarousel;
