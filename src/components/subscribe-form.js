import cn from 'classnames';

import styles from '@/styles/subscribe-form.module.scss';

const subscribe = {
  headline: 'Become a subscriber today!',
  caption: 'Sign up to receive our newsletter where we share tips, special offers, and our latest content. We are dedicated to helping you achieve a higher state of health.',
};

export default function SubscribeForm() {
  return (
    <section className="section blue">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="content text-left text-lg-center">
              <h2>{subscribe.headline}</h2>
              <p>{subscribe.caption}</p>
              <form className={styles.subscribeForm}>
                <input type="text" placeholder="Email" />
                <button className="secondary" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
