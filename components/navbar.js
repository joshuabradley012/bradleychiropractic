import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import ActiveLink from './active-link';
import Navlinks from './navlinks';
import useMobile from '../hooks/useMobile';

import styles from '../styles/navbar.module.scss';
import logo from '../public/logo.png';

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  let isMobile = false;

  const toggleNav = () => setNavOpen(!isNavOpen);

  if (typeof window !== 'undefined') {
    isMobile = useMobile();
  }

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

          <div className={cn({
            [styles.hamburger]: true,
            [styles.hamburgerActive]: isNavOpen,
          })} onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
          </div>

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
