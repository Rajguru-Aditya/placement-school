import { HeaderOne as header } from "@/data/header";
import MenuOne from "@/components/Menu/MenuOne";

import menus from "@/data/menu";
import { useThemeContext } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

export default function HeaderOne() {
  const { toggleMobileMenu } = useThemeContext();
  const data = {
    classNames: {
      header: "header__main",
      menu: "",
      item: "",
    },
    menus: menus,
  };

  return (
    <header className="skillhub-header header__area">
      <div className="header__wrapper">
        {/* <!-- Header logo  --> */}
        <div className="header__logo">
          <Link to="/">
            <img src={header.logo} alt="Logo" />
          </Link>
        </div>
        {/* <!-- Header menu  --> */}
        <MenuOne data={data} />
        {/* <!-- Header social  --> */}

        {/* <!-- Offcanvas icon  --> */}
        <div className="offcanvas-icon" onClick={toggleMobileMenu}>
          <i className="ph ph-list"></i>
        </div>
        {/* <!-- Header Button  --> */}
        <div className="header__btn">
          {/* <Link className="btn-login" to="#">
            Login
          </Link> */}
          <Link className="btn-signUp btn-hover-shadow" to="#">
            Sign in
          </Link>
        </div>
      </div>
      {/* <!-- Header Search  --> */}
    </header>
  );
}
