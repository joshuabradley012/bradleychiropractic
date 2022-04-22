import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import Icon from './icon';

import styles from '@/styles/icon-link.module.scss';

export default function IconLink({
  active,
  children,
  className,
  href,
  layout = 'left',
  type,
  ...rest
}) {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <Link href={href}>
      <a
        className={cn({
          [styles.iconLink]: true,
          [className]: className,
          [styles.active]: active || isActive,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {layout === 'left' && <Icon type={type} className={styles.iconLeft} />}
        {children && <span className={styles.text}>{children}</span>}
        {layout === 'right' && <Icon type={type} className={styles.iconRight} />}
      </a>
    </Link>
  );
}
