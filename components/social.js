import cn from 'classnames';

import IconLink from './icon-link';

import styles from '../styles/social.module.scss';

export default function Social({ className }) {
  return (
    <div
      className={cn({
        [styles.social]: true,
        [className]: className,
      })}
    >
      <IconLink
        href="https://www.facebook.com/DrBrendonBradley"
        target="_blank"
        type="facebook"
      />
      <IconLink
        href="https://www.youtube.com/channel/UClsnc6L5fOOgXohxkeqx0Gw"
        target="_blank"
        type="youtube"
      />
    </div>
  );
}
