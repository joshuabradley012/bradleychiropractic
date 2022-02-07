import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import ActiveLink from './active-link';
import Icon from './icon';
import Navlinks from './navlinks';

// styles must be imported after components to maintain priority
import styles from '../styles/navbar.module.scss';
import logo from '../public/logo.png';

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={cn('container', styles.navbarContainer)}>

          <ActiveLink href="/" activeClassName={styles.active}>
            <a className={styles.logo}>
              <Image
                src={logo}
                alt="Bradley Chiropractic Nutrition Center Logo"
                width={64}
                height={64}
              />
            </a>
          </ActiveLink>

          <Navlinks className="d-none d-md-flex" />

          <div className={styles.cta}>
            <ActiveLink href="/contact" activeClassName={styles.active}>
              <a className="btn">Schedule Now</a>
            </ActiveLink>
          </div>

          <Icon
            className={cn({
              [styles.hamburger]: true,
              [styles.hamburgerActive]: isNavOpen,
            })}
            onClick={toggleNav}
            type="hamburger"
          />

        </div>
      </nav>

      <nav className={cn({
        [styles.drawer]: true,
        [styles.drawerOpen]: isNavOpen,
      })}>
        <div className={cn('container', styles.navbarContainer)}>
          <Navlinks />
        </div>
      </nav>
    </div>
  );
}
