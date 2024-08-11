import { heroThree as hero } from "@/data/hero";
import { Link } from "react-router-dom";

export default function HeroThree() {
  return (
    <div className="hero__area-6">
        <div className="hero__header">
          {hero.description && (
            <p className="hero__content-6 fade-slide bottom">
              {hero.description}
            </p>
          )}
          {hero.btn && (
            <div className="fade-slide bottom" data-delay="0.8">
              <Link
                className="hero__btn-green btn-hover-effect border-radius-50"
                to={hero.btn.link}
              >
                {hero.btn.text}
              </Link>
            </div>
          )}
        </div>
        {hero.title && (
          <h1 className="hero__title-6">
            {hero.title.sliceOne}
          </h1>
        )}
        <div className="hero__bannerImg">
          <img src={hero.image} alt="banner" className="hero__bannerImg"/>
        </div>
    </div>
  );
}
