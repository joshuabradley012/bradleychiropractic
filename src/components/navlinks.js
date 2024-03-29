import cn from 'classnames';
import styles from '@/styles/navlinks.module.scss';

import ActiveLink from './active-link';

export default function Navlinks({ className, handleClick }) {
  const links = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/services',
      name: 'Services',
    },
    {
      href: '/about',
      name: 'About',
    },
    {
      href: '/testimonials',
      name: 'Testimonials',
    },
    {
      href: '/blog',
      name: 'Blog',
    },
    {
      href: '/forms',
      name: 'Forms',
    },
  ];

  return (
    <div className={cn(styles.links, className)}>
      {links.map(link => (
        <ActiveLink href={link.href} activeClassName={styles.active} key={link.href}>
          <a className={styles.link} onClick={handleClick}><span className={styles.linkInner}>{link.name}</span></a>
        </ActiveLink>
      ))}
    </div>
  );
}
