import { TestimonialCardProps } from "config/types";
import * as React from "react";

const TestimonialCard: React.FC<TestimonialCardProps> = (props: TestimonialCardProps) => {
    return (
        <div className="testimonial-card-div">
            <div className="testimonial-name">
                <p className="real-name">{props.name}</p>
                <p className="designation">{props.designation}</p>
            </div>
            <p className="testimonial-data">{props.testimonial}</p>
        </div>
    );
};

export default TestimonialCard;
