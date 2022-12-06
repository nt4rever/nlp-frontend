import "./index.scss";
import logo from "./../../assets/images/logo.png";
import { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Header = () => {
  const [searchBox, setSearchBox] = useState(false);
  const { nodeRef } = useClickOutSide(() => setSearchBox(false));
  const handleSearchClick = () => {
    setSearchBox((x) => !x);
  };

  return (
    <>
      <div className="contact-information">
        <div className="contact-information__left">Welcome to Albion</div>
        <div className="contact-information__right">
          <div className="contact-information__right__item">
            <i className="fa fa-location-arrow"></i>
            <span>2750 Quadra Street Victoria, Canada</span>
          </div>
          <div className="contact-information__right__item">
            <a href="#">
              <i className="fa-solid fa-phone-flip"></i>
              <span>+84336757208</span>
            </a>
          </div>
          <div className="contact-information__right__item">
            <a href="#">
              <i className="fa-solid fa-envelope"></i>
              <span>levantanald@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header__left">
          <div className="header__left__logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="header__right__nav">
            <div className="item active">Home</div>
            <div className="item">Home</div>
            <div className="item">Home</div>
            <div className="item">Home</div>
            <div className="item">Home</div>
          </div>
          <div className="header__right__search" ref={nodeRef}>
            <div className="icon" onClick={handleSearchClick}>
              <i
                className={
                  !searchBox
                    ? `fa-regular fa-magnifying-glass`
                    : `fa-solid fa-xmark`
                }
              ></i>
            </div>

            <div className={`search_box ${searchBox ? "active" : ""}`}>
              <input type="text" name="search" placeholder="Search" />
            </div>
          </div>
          <div className="header__right__button">
            <button>Schedule a Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
