import "./footer_index.css"

import { BsArrowRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="subscription-container">
          <h1 className="footer-sub-text">Subscribe to Aesop communications</h1>
          <hr className="h-rule-sub" />
          <div className="email-input-container">
            <input
              className="email-input"
              type="email"
              placeholder="Email address"
            />
            <BsArrowRight className="right-icon" />
          </div>
          <div>
            <input id="check" className="check-box" type="checkbox" />
            <label htmlFor="check" className="checkbox-label">
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <a
                className="anchor"
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                privacy policy.
              </a>
            </label>
          </div>
        </div>

        <div className="about-container">
          <h1 className="footer-sub-text">Orders and support</h1>
          <hr className="h-rule-about" />
          <ul className="ul-container">
            <li className="list-item">Contact Us {<FiArrowUpRight />}</li>
            <li className="list-item">FAQ's {<FiArrowUpRight />}</li>
            <li className="list-item">Shipping {<FiArrowUpRight />}</li>
            <li className="list-item">Returns {<FiArrowUpRight />}</li>
            <li className="list-item">Orders history</li>
            <li className="list-item">Terms and conditions</li>
          </ul>
        </div>
        <div className="about-container">
          <h1 className="footer-sub-text">Services</h1>
          <hr className="h-rule-about" />
          <ul className="ul-container">
            <li className="list-item">Live assistance</li>
            <li className="list-item">Corporate gifts</li>
            <li className="list-item">Facial Appointments</li>
            <li className="list-item">Click and Collect</li>
            <li className="list-item">Video Consultation</li>
          </ul>
        </div>
        <div className="about-container">
          <h1 className="footer-sub-text">Location preferences</h1>
          <hr className="h-rule-about" />
          <ul className="ul-container">
            <li className="list-item">
              Shipping: <br />
              <a className="anchor" href="https://www.google.com">
                Hong Knong SAR,China
              </a>
            </li>
            <li className="list-item">
              Language: <br />
              <span href="https://www.google.com">English</span> <br />
              <span href="https://www.google.com">China</span>
            </li>
          </ul>
        </div>
        <div className="subscription-container">
          <h1 className="footer-sub-text">Sustainability</h1>
          <hr className="h-rule-sub" />
          <h1 className="footer-sub-text">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </h1>
        </div>
        <div className="about-container">
          <h1 className="footer-sub-text">About</h1>
          <hr className="h-rule-about" />
          <ul className="ul-container">
            <li className="list-item">Our story</li>
            <li className="list-item">Foundation</li>
            <li className="list-item">Careers</li>
            <li className="list-item">Privacy policy</li>
            <li className="list-item">Accessibility</li>
            <li className="list-item">Cookie Policy</li>
          </ul>
        </div>
        <div className="about-container">
          <h1 className="footer-sub-text">Social media</h1>
          <hr className="h-rule-about" />
          <ul className="ul-container">
            <li className="list-item">Instagram {<FiArrowUpRight />}</li>
            <li className="list-item">Twitter {<FiArrowUpRight />}</li>
            <li className="list-item">LinkedIn {<FiArrowUpRight />}</li>
            <li className="list-item">WeChat</li>
            <li className="list-item">Weibo {<FiArrowUpRight />}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer