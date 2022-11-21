import { useState } from "react";
import cn from 'classnames';

import styles from '@/styles/subscribe-form.module.scss';

const subscribe = {
  headline: 'Become a subscriber today!',
  caption: 'Sign up to receive our newsletter where we share tips, special offers, and our latest content. We are dedicated to helping you achieve better health.',
};

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  async function submit(e) {
    e.preventDefault();
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="section blue">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 content-col">
            <div className="content text-left text-lg-center">
              <h2>{subscribe.headline}</h2>
              <p>{subscribe.caption}</p>
              <form className={styles.subscribeForm} onSubmit={submit}>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  value={email}
                />
                <button className="secondary" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
