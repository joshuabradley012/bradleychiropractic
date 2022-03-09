import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import styles from '../styles/about.module.scss';

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/MT5TtVhd568?controls=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
