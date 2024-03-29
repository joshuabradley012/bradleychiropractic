import Link from 'next/link';
import cn from 'classnames';
import hash from "object-hash";

import Icon from '@/components/icon';
import Markdown from '@/components/markdown';

import styles from '@/styles/benefits.module.scss';

export default function Benefits({ content }) {
  return (
    <section className="section gray">
      <div className="container">
        <div className="row justify-content-center mb-12">
          <div className="col-12 col-lg-8">
            <Markdown className="content text-left text-lg-center">
              {content.titleContent}
            </Markdown>
          </div>
        </div>
        <div className="row gy-12">
          {content.columns.map(column => (
            <div key={hash(column)} className="col-12 col-lg-6 col-xl-4">
              {column.icon && <Icon className={styles.columnIcon} type={column.icon} />}
              <Markdown className="content">{column.content}</Markdown>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-12">
          <div className="col-12 col-lg-8">
            <div className="content text-left text-lg-center">
              <Link href="/schedule">
                <a className="btn">{content.cta}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
