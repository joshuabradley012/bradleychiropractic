import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from 'classnames';
import { subscriberSchema } from "@/lib/validation";

import styles from '@/styles/subscribe-form.module.scss';

const subscribe = {
  headline: 'Become a subscriber today!',
  caption: 'Sign up to receive our newsletter where we share tips, special offers, and our latest content. We are dedicated to helping you achieve better health.',
};

export default function SubscribeForm() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscriberSchema),
  });

  async function submit(data) {
    try {
      if (submitted) return;
      setSubmitted(true);
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.status === 200) {
        setMessage(json.message);
        clearErrors('email');
        setSubmitted(true);
      } else {
        setMessage('');
        setError('email', { type: 'api-error', message: json.message });
        setSubmitted(false);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(false);
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
              <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <div className={styles.inputWrapper}>
                  <input
                    {...register('email')}
                    type="text"
                    placeholder="Email"
                    disabled={submitted}
                    className={cn(styles.input, {
                      [styles.inputSuccess]: message,
                      [styles.inputError]: !!errors.email?.message,
                    })}
                  />
                  {!!message && <p className={styles.inputMessage}>{message}</p>}
                  {!!errors.email?.message && <p className={styles.inputErrorMessage}>{errors.email?.message}</p>}
                </div>
                <button disabled={submitted} className={cn("secondary", styles.submitButton)} type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
