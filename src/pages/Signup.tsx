import * as React from "react";
import "pages/styles/signup.scss"
import Input from "pages/components/Input";
import Button from "pages/components/Button";
import Carousel from "pages/components/Carousel";
import TestimonialCarousel from "pages/components/TestimonialCarousel";
// import Bell from "pages/styles/images/bell.png";
// import classNames from "config/bind";

// const cx = classNames.bind(style);

const Signup: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState(false);

  const isEmailValid = (val: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(val)
  }

  const submitBtn = () => {
    setEmailError(false)
    if (!isEmailValid(email))
      setEmailError(true)
    else
      window.location.href = "https://app.loch.one/welcome";
  }

  return (
    <div className="signup-main-div row">
      {/* left side of the page */}
      <div className="col-md-7 signup-left-div">
        <div className="row first-left-row">
          <div className="first-left-row-content-side col-md-6">
            <img src={'https://ik.imagekit.io/mj6xhze3k/Loch/bell.png?updatedAt=1691936717603'} alt="bell-icon" />
            <p className="notified-txt">Get notified when a <br />highly correlated <br />whale makes a move</p>
            <p className="notified-txt-desc">Find out when a certain whale moves <br />more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
          </div>
          <div className="first-left-row-carousel-side col-md-6">
            <Carousel />
          </div>
        </div>
        <div className="row second-left-row">
          <div className="second-left-row-image-side col-md-6">
            <img alt="whale-watch" className="whale-watch-img" src={`https://ik.imagekit.io/mj6xhze3k/Loch/whale.png?updatedAt=1691936726050`} />
          </div>
          <div className="second-left-row-content-side col-md-6">
            <img alt="whale-eye" className="whale-eye-img" src={`https://ik.imagekit.io/mj6xhze3k/Loch/eye.png?updatedAt=1691936694211`} />
            <p className="whale-text">Watch what the <br /> whales are doing</p>
            <p className="whale-desc">All whales are not equal. Know exactly <br /> whatthe whales impacting YOUR<br /> portfolio are doing.</p>
          </div>
        </div>

        <div className="testimonials-head-div">
          <p className="testimonials-text">Testimonials</p>
          <hr className="testimonials-hr" />
        </div>

        <div className="row testimonial-main-div">
          <div className="col-md-1">
            <img alt="loch-logo" src={`https://ik.imagekit.io/mj6xhze3k/Loch/logo.png?updatedAt=1691938532991`} className="loch-logo" />
          </div>
          <div className="col-md-11 testimonial-card-main-div">
            <TestimonialCarousel />
          </div>
        </div>
      </div>

      {/* right side of the page */}
      <div className="col-md-5 signup-right-div">
        <div className="row right-middle-content">
          <p className="middle-content-head">Sign up for <br />exclusive access.</p>
          <Input type="email" placeholder="Your email address" size={'medium'} onChange={(val: string) => setEmail(val)} />
          {emailError && <p className="valid-email-txt">Please enter a valid email</p>}
          <Button type="primary" text="Get started" onClick={() => submitBtn()} />
        </div>
        <p className="middle-bottom-txt">You’ll receive an email with an invite link to join.</p>
      </div>
    </div>
  );
};

export default Signup;
