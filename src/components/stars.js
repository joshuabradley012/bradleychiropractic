import Icon from '@/components/icon';

import styles from '@/styles/stars.module.scss';

export default function Stars({ count }) {
  const stars = [];
  const remainder = count % 1;
  const limit = count - remainder;

  for (let i = 0; i < limit; i++) {
    stars.push(<Icon type="star" />);
  }

  if (remainder > 0) {
    stars.push(<Icon type="star-half" />);
  }

  return (
    <div className={styles.stars}>
      {stars}
    </div>
  );
}
