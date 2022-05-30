import Link from 'next/link';
import cn from 'classnames';

import Icon from './icon';

import styles from '@/styles/icon-service.module.scss';

export default function IconService({ className, type }) {
  return (
    <Icon type={type} className={cn(className, styles.iconService)} />
  );
}
