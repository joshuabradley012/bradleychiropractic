import Icon from '@/components/icon';

import styles from '@/styles/stars.module.scss';

export default function Stars({ count }) {
  const stars = [];
  const remainder = count % 1;
  const limit = count - remainder;

  for (let i = 0; i < limit; i++) {
    stars.push(<Icon type="star" key={i} />);
  }

  if (remainder > 0 && remainder < .51) {
    stars.push(<Icon type="star-half" key={remainder} />);
  } else if (remainder > .5) {
    stars.push(<Icon type="star" key={remainder} />);
  }

  return (
    <div className={styles.stars} title={`${count} stars`}>
      {stars}
    </div>
  );
}
