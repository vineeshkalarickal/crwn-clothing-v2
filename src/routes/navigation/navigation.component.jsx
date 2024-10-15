import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to={'/'} className="logo-container">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">
            Shop
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  )
}

export default Navigation;