import cn from 'classnames';

import IconService from '@/components/icon-service';
import Image from '@/components/image';
import Markdown from '@/components/markdown';

import styles from '@/styles/split-hero.module.scss';

export default function SplitHero({ content }) {
  return (
    <section className={cn('section', styles.splitHero, content.color)}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.textContent}>
              <Markdown className="content">
                {content.content}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={content.heroImage}
          alt="Chiropractic Hero Image"
          layout="fill"
          priority={true}
        />
        <IconService className={cn('white', styles.icon)} type={content.icon} />
      </div>
    </section>
  );
}
